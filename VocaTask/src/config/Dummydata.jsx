import { createContext, useState } from "react";

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
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

    // Fungsi untuk mengubah profil
    const ChangeProfile = (newData) => {
        setDataProfile((prevData) => ({
            ...prevData,
            ...newData,
        }));
    };

    // Fungsi untuk mengubah status task
    const ChangeStatus = (id) => {
        setTask((prevTask) =>
            prevTask.map((item) =>
                item.id === id ? { ...item, isDone: !item.isDone } : item
            )
        );
    };

    // Fungsi untuk menambah task baru
    const addTask = (title) => {
        if (!title.trim()) return;

        const newTask = {
            id: Date.now(),
            title,
            isDone: false,
        };
        
        setTask((prevTask) => [...prevTask, newTask]);
    };

    // Mengembalikan konteks dengan Provider yang menyediakan task, ChangeStatus, dataProfile, ChangeProfile, dan addTask
    return (
        <DataContext.Provider value={{ task, ChangeStatus, dataProfile, ChangeProfile, addTask }}>
            {children}
        </DataContext.Provider>
    );
};

export { DummyData, DataContext };
