export interface Hobbies {
    name: '',
    main: '',
    list: []
}

export const hobbies = [
    {
      name: 'visual_art',
      route_text: '/gallery',
      main: 'Digital Arts',
      list: [{"prepend": '', "text": 'Digital Arts', "postpend": ' with', url: ''},
                {"prepend": ' experience in ', "text": 'Adobe Suite', "postpend": ' and', url: ''},
                {"prepend": ' emphasis on ', "text": 'Illustator', "postpend": ' and ', url: ''},
                {"prepend": '', "text": 'Animator', "postpend": '; ', url: ''},
                {"prepend": '', "text": 'Graphic Design', "postpend": ' and ', url: ''},
                {"prepend": '', "text": 'Drawing', "postpend": '', url: ''}]
    },
    {
      name: 'research_topics',
      route_text: '/writings/nonfictions',
      main: '',
      list: [{"prepend": 'Upper-level undergraduate university coursework in ', "text": 'Philosophy', "postpend": '', url: ''},
                {"prepend": ', ', "text": 'Psychology', "postpend": '', url: ''},
                {"prepend": ', ', "text": 'Literature', "postpend": '', url: ''}]
    },
    {
      name: 'mathematics',
      route_text: '',
      main: '',
      list: [{"prepend": 'Current independent education in ', "text": 'Mathematics', "postpend": '', url: ''},
                {"prepend": ' incl. ', "text": 'discrete mathematics', "postpend": '', url: ''},
                {"prepend": ', ', "text": 'set theory', "postpend": '', url: ''},
                {"prepend": ', ', "text": 'abstract algebra', "postpend": '', url: ''}]
    },
    {
      name: 'writing',
      route_text: '',
      main: '',
      list: [{"prepend": '', "text": 'Writing', "postpend": ' including ', url: ''},
                {"prepend": '', "text": 'Non-Fiction', "postpend": ' and ', url: ''},
                {"prepend": ' pieces ', "text": 'Fiction', "postpend": '', url: ''}]
    }
  ];