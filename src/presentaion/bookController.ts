import { Request, Response } from "express";
import { BookService } from "../businessLogic/bookService";

export class BookController {
  private bookService: BookService;

  constructor() {
    this.bookService = new BookService();
  }

  async add(req: Request, res: Response): Promise<void> {
   try {
    const { title } = req.body;
    const book = await this.bookService.add(title);
    res.status(201).json(book);
   } catch (error) {
    res.status(500).json({ error: "Failed to add book" });
   }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const book = await this.bookService.findById(id);
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({ error: "Book not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to find book" });
    }
  }
}