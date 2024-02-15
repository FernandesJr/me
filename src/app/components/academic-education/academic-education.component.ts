import { Component } from '@angular/core';

@Component({
  selector: 'app-academic-education',
  templateUrl: './academic-education.component.html',
  styleUrls: ['./academic-education.component.scss']
})
export class AcademicEducationComponent {

  ngAfterViewInit() {
    this.showCourseElements();
  }

  showCourseElements(): void {
    const observerCourse = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-top');
        }
      });
    });

    Array.from(document.querySelectorAll('.course')).forEach(element => {
      observerCourse.observe(element)
    });
  }

}
