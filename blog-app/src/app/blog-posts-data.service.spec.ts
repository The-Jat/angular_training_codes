import { TestBed } from '@angular/core/testing';

import { BlogPostsDataService } from './blog-posts-data.service';

describe('BlogPostsDataService', () => {
  let service: BlogPostsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPostsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
