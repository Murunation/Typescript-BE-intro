import Theater from "../model/Theater";

export async function getTheaters() {
  return await Theater.find().limit(5);
}
