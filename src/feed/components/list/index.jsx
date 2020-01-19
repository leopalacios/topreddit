import React from 'react';
import PropTypes from 'prop-types';
import * as strings from './strings';
import Post from '../post';

const mockPost = {
  "kind": "t3",
  "data": {
    "domain": "imgur.com",
    "banned_by": null,
    "media_embed": {},
    "subreddit": "space",
    "selftext_html": null,
    "selftext": "",
    "likes": null,
    "user_reports": [],
    "secure_media": null,
    "link_flair_text": "/r/all",
    "id": "2hplea",
    "gilded": 0,
    "secure_media_embed": {},
    "clicked": false,
    "report_reasons": null,
    "author": "Chakintosh",
    "media": null,
    "score": 4237,
    "approved_by": null,
    "over_18": false,
    "hidden": false,
    "thumbnail": "http://a.thumbs.redditmedia.com/fFhSygZWb7GehQqTYS7mYapuF91Wo86KsmOMgrhxiZ8.jpg",
    "subreddit_id": "t5_2qh87",
    "edited": false,
    "link_flair_css_class": "black",
    "author_flair_css_class": null,
    "downs": 0,
    "mod_reports": [],
    "saved": false,
    "is_self": false,
    "name": "t3_2hplea",
    "permalink": "/r/space/comments/2hplea/technology_is_rad/",
    "stickied": false,
    "created": 1411953492,
    "url": "http://imgur.com/wU8lldi",
    "author_flair_text": null,
    "title": "Technology is rad",
    "created_utc": 1411924692,
    "ups": 4237,
    "num_comments": 448,
    "visited": false,
    "num_reports": null,
    "distinguished": null
  }
};

const List = ({ test }) => {
  return (
    <div>
      <div>{ strings.LIST_TITLE }</div>
      <Post post={ mockPost.data } />
    </div>
  );
};

List.propTypes = {
  test: PropTypes.string,
};

export default List;
