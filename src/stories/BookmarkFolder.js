import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import BookmarkFolder from '../components/BookmarkFolder';

const mockBookmarks = () => {
  const bookmarks = [];
  for (let index = 0, end = 9; index < end; index++) {
    bookmarks.push({
      id: `${index + 1}`,
      title: `Bookmark ${index}`,
      url: 'https://google.com'
    });
  }
  return bookmarks;
};

const mockNestedBookmarks = () => {
  const bookmarks = [];
  for (let index = 0, end = 9; index < end; index++) {
    const bookmark = {
      id: `${index + 1}`,
      title: `Bookmark ${index}`,
      url: 'https://google.com'
    };
    bookmarks.push(bookmark);
    bookmarks.push({
      id: `${index + 10}`,
      title: `Nested Group ${index}`,
      children: [{ ...bookmark, id: bookmark.id + 10 }]
    });
  }
  return bookmarks;
};

// storiesOf('BookmarkFolder', module)
//   .addDecorator(muiTheme('dark'))
//   .add('Default', () => <BookmarkFolder id="1" title="Chrome Bookmarks" />)
//   .add('With bookmarks', () =>
//     <BookmarkFolder id="1" title="MyBookmarks" children={mockBookmarks()} />
//   )
//   .add('With nested bookmarks', () =>
//     <BookmarkFolder
//       id="1"
//       title="MyBookmarks"
//       children={mockNestedBookmarks()}
//     />
//   );
