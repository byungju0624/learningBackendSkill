import express from "express";
import * as tweetRepository from "../data/data.js";

export async function getRouter(req, res) {
  const username = req.query.username;
  const data = await (username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll());
  res.status(200).json(data);
}
export async function getUserRouter(req, res) {
  const id = req.params.id;
  const tweet = await tweetRepository.getById(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ meassage: `Tweet id(${id}) not found` });
  }
}
export async function postRouter(req, res) {
  const { text, name, username } = req.body;
  const tweet = await tweetRepository.create(text, name, username);
  res.status(201).json(tweet);
}
export async function updateRouter(req, res) {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = await tweetRepository.updateById(id, text);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ meassage: `Tweet id(${id}) not found` });
  }
}
export async function deleteRouter(req, res) {
  const id = req.params.id;
  await tweetRepository.deleteById(id);
  res.sendStatus(204);
}
