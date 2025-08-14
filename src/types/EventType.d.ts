type Coordinator = {
  name: string;
  image: string;
};

type Volunteer = {
  name: string;
  image: string;
};

type EventType = {
  id: string;
  name: string;
  description: string;
  rules: string[];
  coordinators: Coordinator[];
  volunteer: Volunteer[];
};
