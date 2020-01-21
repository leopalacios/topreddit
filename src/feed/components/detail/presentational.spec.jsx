import React from 'react';
import Detail from './presentational';
import {
  StyledDetailImage,
} from './styled';

describe('Detail presentational', () => {
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
    };
  });

  describe('render', () => {
    it('should show thumbnail', () => {
      const wrapper = shallow(<Detail {...props} />);
      const image = wrapper.find(StyledDetailImage);

      expect(image).toHaveLength(1);
      expect(image.prop('src')).toEqual('someUrl');
    });

    it('should not show thumbnail', () => {
      delete props.thumbnail;
      const wrapper = shallow(<Detail {...props} />);

      expect(wrapper.find(StyledDetailImage)).toEqual({});
    });
  });
});
