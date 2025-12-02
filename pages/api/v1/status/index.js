import database from "../../../../infra/sum.js";

async function status(resuqest, response) {
  const updatedAt = new Date();

  response.status(200).json({
    updated_at: updatedAt,
  });
}

export default status;
