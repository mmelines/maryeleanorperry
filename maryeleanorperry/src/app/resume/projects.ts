export interface Projects {
    name: string;
  }
  
  export const projects = [
    {
      name: 'Finding Time, LLC',
      role: 'co-founder',
      start_est: 'October 2021',
      end_est: '',
      status: 'ongoing',
      description: 'Develop learning software and knowledge management web applications '
       + 'with a focus on managing certification progress.',
      github_url: ''
    },
    {
      name: 'Mollify',
      role: '',
      start_est: 'August 2021',
      end_est: '',
      status: 'ongoing',
      description: 'An application that reads a SQLAlchemy database schema and generates '
       + 'useful custom scaffold and tools to reduce start time of flask implemented data '
       + 'science projects and automate common cloud networking needs. In progress.',
      github_url: 'https://github.com/mmelines/mollify'
    }
  ];

/*
{
  name: '',
  start_est: '',
  end_est: '',
  status: 'ongoing',
  description: '',
  github_url: ''
}
*/