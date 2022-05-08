import { prisma } from "../../prisma";
import { FeedBackCreateData, FeedbackRepository } from "../feedbacks-repository";


export class PrismaFeedbacksRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedBackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })
  }
}