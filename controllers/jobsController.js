import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import mongoose from "mongoose";
import moment from "moment";
const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all required values");
  }

  req.body.createdBy = req.user.userId;
  req.body.isDemoJob = req.body.user.isDemoUser;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
  console.log(job);
};
const getAllJobs = async (req, res) => {
  const { status, jobType, stared, sort, search } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };
  // create a query object to use to request jobs

  if (status && status !== "all") {
    queryObject.status = status;
  }
  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }
  if (stared && stared !== "all") {
    queryObject.stared = stared;
  }
  if (search) {
    queryObject.company = { $regex: search, $options: "i" };
  }
  // NO AWAIT

  let result = Job.find(queryObject);

  // sort the queried jobs

  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z (job title)") {
    result = result.sort("position");
  }
  if (sort === "z-a (job title)") {
    result = result.sort("-position");
  }
  if (sort === "a-z (company)") {
    result = result.sort("company");
  }
  if (sort === "z-a (company)") {
    result = result.sort("-company");
  }

  if (sort === "a-z (location)") {
    result = result.sort("jobLocation");
  }
  if (sort === "z-a (location)") {
    result = result.sort("-jobLocation");
  }

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const jobs = await result;

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
};
const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all required values");
  }
  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id :${jobId}`);
  }
  // check permissions

  checkPermissions(req.user, job.createdBy);

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedJob });
};
const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`No job with id :${jobId}`);
  }

  checkPermissions(req.user, job.createdBy);

  await job.remove();

  res.status(StatusCodes.OK).json({ msg: "Success! Job removed" });
};
const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
    followedUp: stats["followed up"] || 0,
  };

  // find all stared jobs

  let staredJobs = await Job.find({
    createdBy: req.user.userId,
    stared: true,
  });

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();

  res
    .status(StatusCodes.OK)
    .json({ defaultStats, monthlyApplications, staredJobs });
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
