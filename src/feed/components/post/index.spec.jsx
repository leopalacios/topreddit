import React from 'react';
import Post from './index';
import {
  StyledThumbnail,
  StyledReadPostIcon,
} from './styled';

describe('Post', () => {
  let props;

  beforeEach(() => {
    props = {
      post: {
        id: 'someId',
        author: 'someAuthor',
        created_utc: 12345,
        title: 'someTitle',
        thumbnail: 'someUrl',
        num_comments: 34,
        is_read: false,
      },
      onDismissPost: jest.fn(),
      onExpandPost: jest.fn(),
    };
  });

  describe('render', () => {
    it('should show thumbnail', () => {
      const wrapper = shallow(<Post {...props} />);
      const image = wrapper.find(StyledThumbnail);

      expect(image).toHaveLength(1);
      expect(image.prop('src')).toEqual('someUrl');
    });

    it('should not show thumbnail', () => {
      delete props.thumbnail;
      const wrapper = shallow(<Post {...props} />);

      expect(wrapper.find(StyledThumbnail)).toEqual({});
    });

    it('should show read icon', () => {
      const wrapper = shallow(<Post {...props} />);

      expect(wrapper.find(StyledReadPostIcon)).toHaveLength(1);
    });

    it('should not show read icon', () => {
      props.post.is_read = true;
      const wrapper = shallow(<Post {...props} />);

      expect(wrapper.find(StyledReadPostIcon)).toHaveLength(0);
    });
  });
});
