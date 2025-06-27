import { BookRepositoryInterface } from "../dataAccess/bookRepositoryinterface";
import { Book } from "../generated/prisma";
import { BookServiceInterface } from "./bookserviceinterface";

export class BookService implements BookServiceInterface {
  constructor(private readonly bookRepository: BookRepositoryInterface) {}

  async add(title: string): Promise<Book> {
    return this.bookRepository.create(title);
  }

  async findById(id: string): Promise<Book | null> {
    return await this.bookRepository.findById(id);
  }
}
