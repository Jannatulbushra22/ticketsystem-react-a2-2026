import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainSection = ({ setInProgressCount, setResolvedCount }) => {
    const [tickets, setTickets] = useState([]);
    const [taskStatus, setTaskStatus] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);

    // 1. Fetch Data from Public Folder
    useEffect(() => {
        fetch('/tickets.json')
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load JSON");
                return res.json();
            })
            .then((data) => setTickets(data))
            .catch((err) => console.error("Error loading tickets:", err));
    }, []);

    // 2. Add ticket to Task Status Section
    const handleTicketClick = (ticket) => {
        // Same ticket twice to Task Status
        if (taskStatus.find(t => t.id === ticket.id)) {
            toast.warn("Ticket is already in progress!");
            return;
        }
        
        setTaskStatus([...taskStatus, ticket]);
        
        // Requirement: Increase count of in-progress in banner
        setInProgressCount(prev => prev + 1); 
        
        // Requirement: Show alert (toast)
        toast.success("Ticket added to Task Status!");
    };

    // 3. Logic to Complete a Task
    const handleComplete = (ticket) => {
        // Requirement: Clicking Complete Button shows alert
        toast.info(`Task "${ticket.title}" Completed!`);

        // Remove from Task Status (Top Right)
        setTaskStatus(taskStatus.filter(t => t.id !== ticket.id));
        
        // Add to Resolved List (Bottom Right)
        setResolvedTasks([...resolvedTasks, ticket]);
        
        // Requirement: Decrease in-progress and increase resolved in banner
        setInProgressCount(prev => prev - 1);
        setResolvedCount(prev => prev + 1);

        // Optional: Remove from the left grid once it's fully resolved
        setTickets(tickets.filter(t => t.id !== ticket.id));
    };

    return (
        // Added min-h-screen to ensure the background covers the page
        <main className="bg-[#F3F4F6] min-h-screen border-b border-gray-100">
            <div className="container  px-4 lg:px-5 py-5 grid grid-cols-1 lg:grid-cols-10 gap-10">
                <ToastContainer position="top-right" autoClose={2000} />
                
                {/* Left Side: 2-Column Grid */}
                <div className="lg:col-span-6">
                    <h2 className="text-2xl font-bold mb-6 text-[#111827]">Customer Tickets</h2>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                        {tickets.map(ticket => (
                            <div 
                                key={ticket.id} 
                                onClick={() => handleTicketClick(ticket)} 
                                className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-all active:scale-80"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-gray-800 pr-4">{ticket.title}</h3>
                                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 whitespace-nowrap">
                                        ● {ticket.status}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{ticket.description}</p>
                                <div className="border-t pt-3 flex justify-between items-center text-[10px] font-bold text-gray-400">
                                    <div>{ticket.id} <span className="ml-2 text-red-400 uppercase">{ticket.priority}</span></div>
                                    <div>{ticket.customer}<i class="fa-solid fa-calendar"></i>{ticket.createdAt}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Task Status & Resolved Tasks */}
                <div className="lg:col-span-3 space-y-4">
                    {/* Task Status Section */}
                    <div className=" ">
                        <h2 className="text-xl font-bold mb-4 text-[#111827]">Task Status</h2>
                        <div className="space-y-4">
                            {taskStatus.length === 0 ? (
                                <p className="text-sm text-gray-400 italic">Select a ticket to add to Task Status</p>
                            ) : (
                                taskStatus.map(task => (
                                    <div key={task.id} className="bg-[#F9FAF2] p-4 rounded-lg border border-yellow-100 text-center">
                                        <p className="font-bold text-sm mb-3 text-gray-800">{task.title}</p>
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation(); // triggering ticket click again
                                                handleComplete(task);
                                            }} 
                                            className="w-full bg-[#5E7D2F] text-white py-2 rounded-md font-bold hover:bg-[#435C1D] transition-colors shadow-sm"
                                        >
                                            Complete
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Resolved Task Section */}
                    <div className="">
                        <h2 className="text-xl font-bold mb-4 text-[#111827]">Resolved Task</h2>
                        <div className="space-y-2">
                            {resolvedTasks.length === 0 ? (
                                <p className="text-sm text-gray-400 italic">No resolved tasks yet..</p>
                            ) : (
                                resolvedTasks.map(task => (
                                    <div key={task.id} className="bg-[#EBF1FF] p-3 rounded-lg text-blue-800 font-bold text-sm border border-blue-50">
                                        {task.title}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainSection;