import { createContext, useState } from "react";

const DataContext = createContext();

const DummyData = ({ children }) => {
    const [task, setTask] = useState([
        { id: 1, title: "Title Task 1", isDone: false },
        { id: 2, title: "Title Task 2", isDone: false },
        { id: 3, title: "Title Task 3", isDone: false },
        { id: 4, title: "Title Task 4", isDone: true },
    ]);

    const [dataProfile, setDataProfile] = useState({
        name: "Nakano Itsuki",
        email: "nakano@gmail.com",
        password: "kewerkewer",
        img: "https://i.pinimg.com/564x/c3/91/51/c3915194a21f43ccabfc2d0fd8c3a641.jpg",
    });

    const ChangeProfile = (newData) => {
        setDataProfile(newData);
    };

    const ChangeStatus = (id) => {
        setTask((DataLama) =>
            //Akses Dengan Map
            DataLama.map((item) =>
                // Cek Jika item atau data id sama dengan id yang dimasukkan maka
                item.id === id ? { ...item, isDone: !item.isDone } : item
            )
        );
    };

    const addTask = (title) => {
        // Jika title Kosong
        if (!title.trim()) return;

        const newTask = {
            id: Date.now(),
            title,
            isDone: false,
        };
        
        setTask((prevTask) => [...prevTask, newTask]);
    };

    return (
        <DataContext.Provider value={{ task, ChangeStatus, dataProfile, ChangeProfile, addTask }}>
            {children}
        </DataContext.Provider>
    );
};

export { DummyData, DataContext };
