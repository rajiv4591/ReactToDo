<br/>
<br/>

<section class="container">
  <section clas="col-md-5">
    <section class="list-box">
      <ul>
        <li *ngFor="let item of leftBox" (click)="setSelectedLeftBoxItem($event, item)">
          {{item.name}}
          <ul>
            <li *ngFor="let child of item.children" (click)="setSelectedLeftBoxItem($event, child, item)">
              {{child.name}}
              <ul>
                <li *ngFor="let subchild of child.children" (click)="setSelectedLeftBoxItem($event, subchild, child, item)">
                  {{subchild.name}}
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </section>
  <section clas="col-md-2">
    <section class="buttons-box">
      <button class="btn btn-default" (click)="leftToRight()">Add</button><br/>
      <button class="btn btn-default" (click)="rightToLeft()">Remove</button>
    </section>
  </section>
  <section clas="col-md-5">
    <section class="list-box">
      <ul>
        <li *ngFor="let item of rightBox" (click)="setSelectedRightBoxItem($event, item)">
          {{item.name}}
          <ul>
            <li *ngFor="let child of item.children" (click)="setSelectedRightBoxItem($event, child, item)">
              {{child.name}}
              <ul>
                <li *ngFor="let subchild of child.children" (click)="setSelectedRightBoxItem($event, subchild, child, item)">
                  {{subchild.name}}
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </section>
</section>
