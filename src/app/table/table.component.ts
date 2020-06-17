import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../service/book.service';
import { IBook } from '../interface/ibook';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['title', 'author', 'pages'];
  dataSource: MatTableDataSource<IBook>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.bookService.getBooks());
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    // const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
