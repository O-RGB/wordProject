import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { CreateDataService } from 'src/app/data/create-data.service';
import { productNode } from 'src/app/data/data-interface';


const TREE_DATA: any[] = [
  {
    name: 'ใบงาน',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'สื่อการสอน',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-tree-nested',
  templateUrl: './tree-nested.component.html',
  styleUrls: ['./tree-nested.component.css']
})
export class TreeNestedComponent implements OnInit {

  @Output() onClickManu = new EventEmitter<any>();
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  mode:string = ""
  constructor(private datatest:CreateDataService) {
    this.dataSource.data = this.datatest.getTree()
  }
  ngOnInit(): void {
  }

  hasChild = (_: number, node: productNode) => !!node.children && node.children.length > 0;

  setMode(value:string){
    this.mode = value
  }
  onClick(value:string){
    let mode = this.dataSource.data.map((data:productNode) => {
      let temp = data.children?.findIndex((list:any) => list == value)
      if(temp != -1){
        return data.name
      }else{
        return ''
      }

    })
    let modeNew  = mode.filter(x => x != '')[0]
    this.onClickManu.emit({name:value,mode:modeNew});
  }



}
