import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dual-list-box',
  templateUrl: './dual-list-box.component.html',
  styleUrls: ['./dual-list-box.component.scss']
})
export class DualListBoxComponent implements OnInit {

  @Input() leftBox: any[];
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  private rightBox: any[] = [];

  private selectedLeftBoxItem;
  private selectedLeftBoxParent1;
  private selectedLeftBoxParent2;

  private selectedRightBoxItem;
  private selectedRightBoxParent1;
  private selectedRightBoxParent2;

  constructor() { }

  ngOnInit() {
  }

  private checkForExistingParentInRightBox(name, direction) {
    let index;
    let box;
    if (direction === 'left') {
      box = this.rightBox;
    } else {
      box = this.leftBox;
    }
    if (box.length > 0) {
      box.forEach((item, ind) => {
        if (item.name === name) {
          index = ind;
        }
      });
      return index >= 0 ? index : -1;
    } else {
      return -1;
    }
  }

  private checkForExistingChildInRightBox(par, child, direction) {
    const parIndex = this.checkForExistingParentInRightBox(par, direction);
    let index;
    let box;
    if (direction === 'left') {
      box = this.rightBox;
    } else {
      box = this.leftBox;
    }
    if (parIndex !== -1) {
      box[parIndex].children.forEach((childs, ind) => {
        if (childs.name === child) index = ind;
      });
      return index >= 0 ? index : -1;
    } else {
      return -1;
    }
  }

  private moveParentFromLeftToRight(direction) {
    let item;
    let par1;
    let par2;
    let box1;
    let box2;
    if (direction === 'left') {
      item = this.selectedLeftBoxItem;
      par1 = this.selectedLeftBoxParent1;
      par2 = this.selectedLeftBoxParent2;
      box1 = this.leftBox;
      box2 = this.rightBox;
    } else {
      item = this.selectedRightBoxItem;
      par1 = this.selectedRightBoxParent1;
      par2 = this.selectedRightBoxParent2;
      box1 = this.rightBox;
      box2 = this.leftBox;
    }

    let index;
    const mainParentIndexInRight = this.checkForExistingParentInRightBox(item.name, direction);
    index = box1.forEach((boxItem, ind) => {
      if (boxItem.name === item.name) {
        index = index;
      }
    });
    if (mainParentIndexInRight !== -1) {
      box2[mainParentIndexInRight].children = box2[mainParentIndexInRight].children.concat(item.children);
    } else {
      box2.push(item);
    }
    box1.splice(index, 1);
    if (direction === 'left') {
      this.leftBox = box1;
      this.rightBox = box2;
    } else {
      this.rightBox = box1;
      this.leftBox = box2;
    }
  }

  private moveChildFromLeftToRight(direction) {
    let item;
    let par1;
    let par2;
    let box1;
    let box2;
    if (direction === 'left') {
      item = this.selectedLeftBoxItem;
      par1 = this.selectedLeftBoxParent1;
      par2 = this.selectedLeftBoxParent2;
      box1 = this.leftBox;
      box2 = this.rightBox;
    } else {
      item = this.selectedRightBoxItem;
      par1 = this.selectedRightBoxParent1;
      par2 = this.selectedRightBoxParent2;
      box1 = this.rightBox;
      box2 = this.leftBox;
    }


    let index;
    let itemIndex = -1;
    const mainParentInRight = this.checkForExistingParentInRightBox(par1.name, direction);
    const childInRight = this.checkForExistingChildInRightBox(par1.name, item.name, direction);
    index = box1.forEach((boxItem, boxItemIndex) => {
      boxItem.children.forEach((child, ind) => {
        if (child.name === item.name) {
          index = ind;
        }
      });
      boxItem.children.splice(index, 1);
      if (boxItem.children.length === 0) itemIndex = boxItemIndex;
    });
    if (itemIndex !== -1) box1.splice(itemIndex, 1);
    if (mainParentInRight !== -1) {
      if (childInRight !== -1) {
        box2[mainParentInRight].children[childInRight].children =
          box2[mainParentInRight].children[childInRight].children.concat(item.children);
      } else {
        box2[mainParentInRight].children.push(item);
      }
    } else {
      const obj = {
        name: par1.name,
        children: [item]
      }
      box2.push(obj);
    }
    if (direction === 'left') {
      this.leftBox = box1;
      this.rightBox = box2;
    } else {
      this.rightBox = box1;
      this.leftBox = box2;
    }
  }

  private moveSubChildFromLeftToRight(direction) {
    let item;
    let par1;
    let par2;
    let box1;
    let box2;
    if (direction === 'left') {
      item = this.selectedLeftBoxItem;
      par1 = this.selectedLeftBoxParent1;
      par2 = this.selectedLeftBoxParent2;
      box1 = this.leftBox;
      box2 = this.rightBox;
    } else {
      item = this.selectedRightBoxItem;
      par1 = this.selectedRightBoxParent1;
      par2 = this.selectedRightBoxParent2;
      box1 = this.rightBox;
      box2 = this.leftBox;
    }

    let index;
    let itemIndex = -1;
    let childIndex = -1;
    const mainParentInRight = this.checkForExistingParentInRightBox(par2.name, direction);
    const childInRight = this.checkForExistingChildInRightBox(par2.name, par1.name, direction);
    index = box1.forEach((boxItem, boxItemIndex) => {
      boxItem.children.forEach((child, childInd) => {
        if (child.name === par1.name) {
          child.children.forEach((subChild, ind) => {
            if (subChild.name === item.name) index = ind;
          });
          child.children.splice(index, 1);
          if (child.children.length === 0) childIndex = childInd;
        }
      });
      if (childIndex !== -1) boxItem.children.splice(childIndex, 1);
      if (boxItem.children.length === 0) itemIndex = boxItemIndex;
    });
    if (itemIndex !== -1) box1.splice(itemIndex, 1);
    if (mainParentInRight !== -1) {
      if (childInRight !== -1) {
        box2[mainParentInRight].children[childInRight].children.push(item);
      } else {
        const obj = {
          name: par1.name,
          children: [item]
        };
        box2[mainParentInRight].children.push(obj);
      }
    } else {
      const obj = {
        name: par2.name,
        children: [{
          name: par1.name,
          children: [item]
        }]
      };
      box2.push(obj);
    }
    if (direction === 'left') {
      this.leftBox = box1;
      this.rightBox = box2;
    } else {
      this.rightBox = box1;
      this.leftBox = box2;
    }
  }

  private emitOnChange() {
    this.onChange.emit({
      leftBox: this.leftBox,
      rightBox: this.rightBox
    });
  }

  public setSelectedLeftBoxItem(event, item, par1, par2) {
    event.stopPropagation();
    this.selectedLeftBoxItem = item;
    this.selectedLeftBoxParent1 = par1;
    this.selectedLeftBoxParent2 = par2;
  }

  public setSelectedRightBoxItem(event, item, par1, par2) {
    event.stopPropagation();
    this.selectedRightBoxItem = item;
    this.selectedRightBoxParent1 = par1;
    this.selectedRightBoxParent2 = par2;
  }

  public leftToRight() {
    if (!this.selectedLeftBoxParent1 && !this.selectedLeftBoxParent2) {
      this.moveParentFromLeftToRight('left');
    }

    if (this.selectedLeftBoxParent1 && !this.selectedLeftBoxParent2) {
      this.moveChildFromLeftToRight('left');
    }

    if (this.selectedLeftBoxParent1 && this.selectedLeftBoxParent2) {
      this.moveSubChildFromLeftToRight('left');
    }

    this.emitOnChange()
  }

  public rightToLeft() {
    if (!this.selectedRightBoxParent1 && !this.selectedRightBoxParent2) {
      this.moveParentFromLeftToRight('right');
    }

    if (this.selectedRightBoxParent1 && !this.selectedRightBoxParent2) {
      this.moveChildFromLeftToRight('right');
    }

    if (this.selectedRightBoxParent1 && this.selectedRightBoxParent2) {
      this.moveSubChildFromLeftToRight('right');
    }

    this.emitOnChange();
  }

}
