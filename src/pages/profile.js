// import './App.css';
import '../App.css';

export const user = {
    name: 'Abhi Kumar Yellapu',
    age: 19,
    occupation: 'Employee',
    employeeId: '4014',
    imageUrl: 'https://myportal.tecnics.com/UserFiles/EmpPhotos/4014.jpg',
};

export default function Profile({user}) {
    return (
        <section aria-label={`Profile of ${user.name}`}>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: 90,
                    height: 90,
                }}
            />
            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>
            <p>Occupation: {user.occupation}</p>
            <p>Employee ID: {user.employeeId}</p>
        </section>
    );
}
