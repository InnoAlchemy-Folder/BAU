export const boardMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Chairperson",
    img: "board-member.png",
  },
  {
    id: 2,
    name: "Michael Smith",
    position: "Vice Chair",
    img: "board-member.png",
  },
  {
    id: 3,
    name: "Emma Davis",
    position: "Secretary",
    img: "board-member.png",
  },
  {
    id: 4,
    name: "James Brown",
    position: "Treasurer",
    img: "board-member.png",
  },
  {
    id: 5,
    name: "Olivia Garcia",
    position: "Board Member",
    img: "board-member.png",
  },
  {
    id: 6,
    name: "David Wilson",
    position: "Board Member",
    img: "board-member.png",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    position: "Board Member",
    img: "board-member.png",
  },
  {
    id: 8,
    name: "Liam Anderson",
    position: "Board Member",
    img: "board-member.png",
  },
  {
    id: 9,
    name: "Mia Thomas",
    position: "Board Member",
    img: "board-member.png",
  },
  {
    id: 10,
    name: "Noah Taylor",
    position: "Board Member",
    img: "board-member.png",
  },
];
const statusColors: { [key: string]: string } = {
  new: "#4684c4",
  past: "#253f59",
  completed: "rgba(108, 117, 125, 0.7)",
};

export const events = [
  {
    title: "We speak to Aimer & Tatin Creative Fund Board Members",
    img: "event-image.png",
    status: "New",
    date: "December 31, 2021",
    color: statusColors.new,
  },
  {
    title: "Annual Charity Gala",
    img: "event-image.png",
    status: "Past",
    date: "February 15, 2024",
    color: statusColors.past,
  },
  {
    title: "Fundraising Event for Local Communities",
    img: "event-image.png",
    status: "New",
    date: "March 10, 2024",
    color: statusColors.new,
  },
  {
    title: "Meet the Experts in Creative Arts",
    img: "event-image.png",
    status: "New",
    date: "April 5, 2024",
    color: statusColors.new,
  },
  {
    title: "Tech Innovations in the Modern World",
    img: "event-image.png",
    status: "New",
    date: "May 20, 2024",
    color: statusColors.new,
  },
  {
    title: "Youth Empowerment Workshop",
    img: "event-image.png",
    status: "Past",
    date: "June 14, 2024",
    color: statusColors.past,
  },
];

export const serviceData = [
  {
    title: "Expanded Reach and Visibility",
    list: ["Global Exposure", "Co-Branding Opportunities"],
  },
  {
    title: "Enhanced User Engagement",
    list: ["Interactive Features", "Personalized Content"],
  },
  {
    title: "Data-Driven Insights",
    list: ["Real-Time Analytics", "Performance Tracking"],
  },
  {
    title: "Scalable Solutions",
    list: ["Flexible Architecture", "Adaptable for Growth"],
  },
];

export const eventCategories = [
  {
    title: "All",
    selected: true,
  },
  {
    title: "Category 1",
    selected: false,
  },
  {
    title: "Category 2",
    selected: false,
  },
];

export const socialLinks = ["google.png", "facebook.png", "apple.png"];

export default { boardMembers, events, serviceData, eventCategories, socialLinks };
