import LinkItem from "./LinkItem/LinkItem";

const GNB = () => {
  const linkList = [
    { href: '/routing', title: 'Routing' },
  ];

  return (
    <nav>
      <ul>
        {
          linkList.map(link => (
            <LinkItem key={link.href} link={link} />
          ))
        }
      </ul>
    </nav>
  );
};

export default GNB;
