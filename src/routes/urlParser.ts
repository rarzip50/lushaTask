
import express, { Request, Response } from "express";
import * as urlParserService from "../services/urlParser";

/**
 * Router Definition
 */
export const urlParserRouter = express.Router();

urlParserRouter.post("/", async (req, res) => {
  try {
    const { url } = req.body
    res.send(200)
    //Generate all subUrls and save them to db with their html - in other node process
    const allSubUrls = await urlParserService.getSubSubUrls(url)
  } catch (e) {
    res.send(500)
    console.log(e.message)
  }

})