import React from 'react';
import 'jest-styled-components';

import { StyledListWrapper } from './styled';

describe('List Styled Components', () => {
  describe('StyledListWrapper', () => {
    it('should update correctly transform property when providing isListOpen', () => {
      const wrapper = shallow(<StyledListWrapper isListOpen />);
      expect(wrapper).toHaveStyleRule('transform', 'translateX(0%)');
    });

    it('should update correctly transform property when providing isListOpen as false', () => {
      const wrapper = shallow(<StyledListWrapper isListOpen={false} />);
      expect(wrapper).toHaveStyleRule('transform', 'translateX(-100%)');
    });
  });
});
