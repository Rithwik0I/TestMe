// Mock user data
const mockUser = {
  id: 1,
  name: "Bob Smith",
  email: "bob.smith@example.com",
  avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  bio: "Love making a difference through small acts of kindness.",
  location: "Los Angeles, CA",
  friends: [
    {
      id: 1,
      name: "Alice Johnson",
      recentActivity: "Volunteering at the animal shelter",
    },
    {
      id: 3,
      name: "Charlie Brown",
      recentActivity: "Planting new flowers in the community garden",
    },
    {
      id: 4,
      name: "David Williams",
      recentActivity: "Attending a community clean-up event",
    },
    {
      id: 5,
      name: "Eve Davis",
      recentActivity: "Hosting a local book club meeting",
    },
    {
      id: 6,
      name: "Frank Miller",
      recentActivity: "Organizing a charity run",
    },
    {
      id: 7,
      name: "Grace Lee",
      recentActivity: "Participating in a neighborhood watch program",
    },
    {
      id: 8,
      name: "Hannah Wilson",
      recentActivity: "Teaching a community cooking class",
    },
    {
      id: 9,
      name: "Ian Taylor",
      recentActivity: "Building a new playground in the local park",
    },
    {
      id: 10,
      name: "Jane Martinez",
      recentActivity: "Joining a local art club",
    },
  ],

  communities: [
    {
      id: 1,
      name: "Animal Shelter Volunteers",
      description:
        "Volunteers dedicated to helping out at local animal shelters.",
    },
    {
      id: 3,
      name: "Brawl stars",
      description: "People who like playing brawl stars.",
    },
  ],
};

// Mock event data
const mockEvents = [
  {
    id: 1,
    tag: 1,
    title: "Cleanup",
    description: "Join us for a cleanup event!",
    image: "https://via.placeholder.com/150",
    upvotes: 100,
    createdOn: "2024-05-01",
  },
  {
    id: 2,
    tag: 2,
    title: "Clot Restoration",
    description: "Help!!!",
    image: "https://via.placeholder.com/150",
    upvotes: 10,
    createdOn: "2024-05-02",
  },
  {
    id: 69,
    tag: 3,
    title: "Red Clot Restoration",
    description: "Help us restoring the local clot!",
    image: "https://via.placeholder.com/150",
    upvotes: 69,
    createdOn: "2024-05-03",
  },
  {
    id: "White_Clot_id",
    tag: 4,
    title: "White Clot Restoration",
    description: "Help us restoring the local !",
    image: "https://via.placeholder.com/150",
    upvotes: 11,
    createdOn: "2024-05-04",
  },
  {
    id: "rithwik",
    tag: 3,
    title: "Haemoglobin Restoration",
    description: "Help us restoring !",
    image: "https://via.placeholder.com/150",
    upvotes: 0,
    createdOn: "2024-05-05",
  },
];

export { mockUser, mockEvents };
