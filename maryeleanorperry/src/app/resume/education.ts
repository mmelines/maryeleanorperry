export interface Education {
    name: string;
    order: number;
    short_description: string;
    description: string;
    provider: string;
    provider_city: string;
    provider_state: string;
    provider_location: string;
    program_type: string;
    degree_type: string;
    program_status: string;
    program_concentration: [];
    courses: {}; 
    start_month: string;
    start_year: string;
    end_month: string;
    end_year: string;
  }
  
  export const education = [
    {
        name: 'Udacity',
        order: 6,
        short_description: 'Skill-Based Programming Nanodegrees',
        description: 'Udacity provides foundational coursework in programming concepts and resources for additional '
         + 'study. Their \'nanodegree\' format provides in-depth collections of courses without unrelated requirements '
         + '(ex. \'gen ed\' coursework). After completing the Introduction to Programming Nanodegree, I am currently '
         + ' enrolled in the Full Stack Programming Nanodegree and the Data Streaming Nanodegree.',
        provider: 'Udacity',
        city: '',
        state: '',
        location: 'Remote - United States',
        program_type: 'Industry Training',
        program_status: 'in progrgress',
        program_concentration: ['Introduction to Programming', 'Full Stack Developer', 'Data Streaming'],
        start_month: 'May',
        start_year: '2016',
        end_month: '',
        end_year: ''
    },
    {
        name: 'GCAS',
        order: 5,
        short_description: 'Self-Directed Research',
        description: '',
        courses: {},
        provider: 'Global Center for Advanced Studies',
        city: 'Dublin',
        state: '',
        location: 'Remote - International',
        program_type: 'Coursework and Discussion in Philosophy',
        program_status: 'incomplete',
        program_concentration: ['Philosophy', 'General Studies'],
        start_month: 'May',
        start_year: '2019',
        end_month: 'March',
        end_year: '2021'
    },
    {
        name: 'PSU-Courses',
        order: 4,
        short_description: 'IST-focused Undergraduate University Coursework',
        description: '',
        courses: {},
        city: 'State College',
        state: 'PA',
        location: 'Remote - United States',
        provider: 'Pennsylvania State University, World Campus',
        program_type: 'Associate\'s',
        program_status: 'incomplete',
        program_concentration: ['IST- Information Sciences and Technology'],
        start_month: 'January',
        start_year: '2013',
        end_month: 'December',
        end_year: '2021'
    },
    {
        name: 'Temple-Courses',
        order: 3,
        short_description: 'A Variety of Undergraduate University Coursework',
        description: 'Temple is a liberal arts school, and during my time there I had the opportunity to take courses '
         + 'in a variety of humanities including history, religious studies, and comparative literature in addition to '
         + 'economics and computer science department coursework. Temple\'s location in Philadelphia, its excellent '
         + 'research resources and the cultural programming available through the school exposed me to new ideas and '
         + 'I began to question my direction, my major and the reasons I was pursuing an undergraduate degree. '
         + 'Although I did not earn a bachelor\'s degree, I developed my writing and research skills and gained a '
         + 'foundataional understanding of economics and critical thinking.',
        courses: {},
        city: 'Philadelphia',
        state: 'PA',
        location: 'Remote - United States',
        provider: 'Temple University',
        program_type: 'University',
        degree_type: 'Bachelor\'s',
        program_status: 'incomplete',
        program_concentration: ['Mathematical Economics'],
        start_month: 'August',
        start_year: '2011',
        end_month: 'May',
        end_year: '2015'
    },
    {
        name: 'Abington-HS',
        order: 2,
        short_description: 'High School Diploma',
        description: '',
        courses: {},
        city: 'Clarks Summit',
        state: 'PA',
        location: 'United States',
        provider: 'Abington Heights High School',
        program_type: 'High School Diploma',
        program_status: 'completed',
        program_concentration: [],
        start_month: 'August',
        start_year: '2010',
        end_month: 'June',
        end_year: '2011'
    },
    {
        name: 'Sem-HS',
        order: 1,
        short_description: 'TAS Scholarship Recipient',
        description: '',
        courses: {},
        city: 'Kingston',
        state: 'PA',
        location: 'United States',
        provider: 'Wyoming Seminary Upper School',
        program_type: 'High School Diploma',
        program_status: 'incomplete',
        program_concentration: [],
        start_month: 'August',
        start_year: '2008',
        end_month: 'May',
        end_year: '2010'
    },
  ];

/* {
    name: '',
    order: -1,
    short_description: '',
    description: '',
    courses: [],
    provider: '',
    program_type: '',
    program_status: '',
    program_concentration: '',
    start_month: '',
    start_year: '',
    end_month: '',
    end_year: ''
}  */