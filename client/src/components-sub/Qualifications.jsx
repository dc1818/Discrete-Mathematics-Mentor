
const techStack = [
    { name: 'JavaScript', skills: ['React', 'Node.js'] },
    { name: 'TypeScript', skills: ['React', 'Angular'] },
    { name: 'Python', skills: ['Django', 'Flask'] },
    { name: 'Java', skills: ['Spring', 'Hibernate'] },
    { name: 'C#', skills: ['ASP.NET', 'Entity Framework'] },
    { name: 'Go', skills: ['Gin', 'Revel'] },
    { name: 'Ruby', skills: ['Rails', 'Sinatra'] },
    { name: 'PHP', skills: ['Laravel', 'Symfony'] },
    { name: 'SQL', skills: ['PostgreSQL', 'MySQL'] },
    { name: 'NoSQL', skills: ['MongoDB', 'Cassandra'] },
    { name: 'HTML', skills: ['HTML5', 'CSS'] },
    { name: 'CSS', skills: ['Sass', 'Tailwind CSS'] },
    { name: 'GraphQL', skills: ['Apollo', 'Relay'] },
    { name: 'REST', skills: ['Express.js', 'Flask-RESTful'] },
    { name: 'Docker', skills: ['Containerization', 'Docker Compose'] },
    { name: 'Kubernetes', skills: ['Orchestration', 'Helm'] },
    { name: 'AWS', skills: ['S3', 'EC2'] },
    { name: 'Azure', skills: ['Functions', 'App Service'] },
    { name: 'Git', skills: ['Version Control', 'GitHub'] },
    { name: 'CI/CD', skills: ['Jenkins', 'GitLab CI'] }
];

const shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};


export default function Qualifications(){
    const shuffledTechStack = shuffleArray([...techStack]);
    const selectedTech = shuffledTechStack.slice(0, 8);

    return (
        <ul className="flex flex-col space-y-4 mt-8 list-disc pl-5 text-3xl gap-2">
            {selectedTech.map((tech, index) => (
                <li key={index}>
                    <strong>{tech.name}</strong>: {tech.skills.join(', ')}
                </li>
            ))}
        </ul>
    );
};

