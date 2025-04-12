export type Introduction = {
  name: string;
  caption: string;
  description: string;
  bgImg: {
    smallImg: string;
    largeImg: string;
  };
};

export type Contact = {
  title: string;
  description: string;
  email: string;
  mobile: string;
  address: string;
};

export type About = {
  title: string;
  description: string;
  mainDescription1: string;
  mainDescription2: string;
  profileImg: {
    smallImg: string;
    largeImg: string;
  };
  skillList1: string[];
  skillList2: string[];
  skillBar: [
    {
      name: string;
      value: number;
    },
    {
      name: string;
      value: number;
    },
    {
      name: string;
      value: number;
    },
  ];
};

export type Services = {
  title: string;
  description: string;
  services: [
    {
      name: string;
      text: string;
    },
    {
      name: string;
      text: string;
    },
    {
      name: string;
      text: string;
    },
  ];
};

export type Experience = {
  title: string;
  description: string;
  profession: {
    title: string;
    timeline_items: [
      {
        role: string;
        name: string;
        duration: {
          startDate: string;
          endDate: string;
        };
        briefText: string;
        developedSkills: string[];
      },
      {
        role: string;
        name: string;
        duration: {
          startDate: string;
          endDate: string;
        };
        briefText: string;
        developedSkills: string[];
      },
    ];
  };
  education: {
    title: string;
    timeline_items: [
      {
        role: string;
        name: string;
        duration: {
          startDate: string;
          endDate: string;
        };
        briefText: string;
        developedSkills: string[];
      },
      {
        role: string;
        name: string;
        duration: {
          startDate: string;
          endDate: string;
        };
        briefText: string;
        developedSkills: string[];
      },
    ];
  };
};
