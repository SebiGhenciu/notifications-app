import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'notifications-app';

  announcements: Announcement[] = [
    {
      title: 'Course.',
      message: 'Course for today will start at 13:00',
      author: ' orice',
      category: { id: 1, name: 'name1' },
    },

    {
      title: 'General.',
      message: 'General for today will start at 15:00',
      author: 'Tom',
      category: { id: 2, name: 'name2' },
    },

    {
      title: 'Laboratory',
      message: 'Laboratory will not be avalabile today',
      author: 'Mike',
      category: { id: 3, name: 'name3' },
    },
  ];

  selectedCategory: Category;
  filteredAnnouncement: Announcement[];

  ngOnInit() {
    this.filteredAnnouncement = this.announcements;
  }

  OnCategorySelected(category: Category) {
    if (category === undefined) {
      this.filteredAnnouncement = this.announcements;
    }
    this.selectedCategory = category;
    this.filteredAnnouncement = this.announcements.filter(
      (announcement) => announcement.category.id === category.id
    );
  }
}