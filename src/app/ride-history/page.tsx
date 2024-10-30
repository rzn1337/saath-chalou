"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    User,
    MapPin,
    Calendar,
    Clock,
    Edit,
    Plus,
    CarFront,
    X,
    AlertCircle,
    Star,
    PlusIcon,
} from "lucide-react";
import ViewRideDetailsDialog from "@/components/ViewRideDetailsDialog";
import CreatedRides from "@/components/CreatedRides";
import BookingHistory from "@/components/BookingHistory";
import Complaints from "@/components/Complaints";


// Dummy data for ride history
const rideHistory = [
    {
        id: 1,
        from: "Downtown",
        to: "Airport",
        date: "2023-06-15",
        time: "14:00",
        price: "$25",
        status: "Completed",
        driver: "John Doe",
    },
    {
        id: 2,
        from: "Suburb",
        to: "City Center",
        date: "2023-06-16",
        time: "09:30",
        price: "$18",
        status: "Completed",
        driver: "Jane Smith",
    },
    {
        id: 3,
        from: "Beach",
        to: "Mountain View",
        date: "2023-06-17",
        time: "11:15",
        price: "$30",
        status: "Completed",
        driver: "Mike Johnson",
    },
    {
        id: 4,
        from: "University",
        to: "Shopping Mall",
        date: "2023-06-18",
        time: "13:45",
        price: "$15",
        status: "Completed",
        driver: "Sarah Brown",
    },
];

// Dummy data for created rides
const initialCreatedRides = [
    {
        from: "Airport",
        to: "Downtown",
        date: "2023-07-20",
        time: "10:00",
        price: "$28",
        status: "Completed",
    },
    {
        from: "City Center",
        to: "Beach",
        date: "2023-07-21",
        time: "14:30",
        price: "$22",
        status: "Completed",
    },
    
];

// Dummy data for complaints
const initialComplaints = [
    {
        id: 1,
        rideId: 2,
        against: "Driver",
        description: "Driver was rude and unprofessional",
        status: "Under Review",
    },
    {
        id: 2,
        rideId: 3,
        against: "Passenger",
        description: "Passenger left trash in the car",
        status: "Resolved",
    },
];

export default function RideHistory() {
    const userCars = [
        { id: "1", name: "Toyota Corolla" },
        { id: "2", name: "Honda Civic" },
        { id: "3", name: "Ford Mustang" },
    ];
    // const [createdRides, setCreatedRides] = useState([]);
    const [createdRides, setCreatedRides] = useState(initialCreatedRides);
    const [editingRide, setEditingRide] = useState(null);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
    const [newRide, setNewRide] = useState({
        from: "",
        to: "",
        date: "",
        time: "",
        price: "",
        status: "Scheduled",
        vehicle: "",
    });

    const handleCreateRide = () => {
        const createdRide = {
            ...newRide,
            id: createdRides.length + 1,
            passengers: [],
        };
        setCreatedRides([...createdRides, createdRide]);
        setIsCreateDialogOpen(false);
        setNewRide({
            from: "",
            to: "",
            date: "",
            time: "",
            price: "",
            status: "Scheduled",
            passengers: [],
        });
    };

    const ride = {
        id: "ride123",
        from: "Downtown",
        to: "Uptown",
        date: "2024-11-01",
        time: "09:00 AM",
        price: "15.00",
        carId: "car456",
        car: {
            make: "Toyota",
            model: "Camry",
            year: 2021,
            color: "Silver",
        },
        status: "scheduled",
        passengers: [
            {
                name: "Alice",
                avatar: "https://example.com/avatar/alice.jpg",
            },
            {
                name: "Bob",
                avatar: "https://example.com/avatar/bob.jpg",
            },
        ],
        driver: {
            name: "John Doe",
            avatar: "https://example.com/avatar/johndoe.jpg",
        },
    };

    const onClose = () => {
        setIsEditDialogOpen(!isEditDialogOpen);
    };
    const handleSubmit = () => {};

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRide({ ...newRide, [name]: value });
    };

    const handleEditRide = (ride) => {
        // Implement edit functionality
        console.log("Edit ride:", ride);
    };

    const [selectedRide, setSelectedRide] = useState(null);
    const [complaintType, setComplaintType] = useState("");
    const [complaintDescription, setComplaintDescription] = useState("");
    const [isComplaintDialogOpen, setIsComplaintDialogOpen] = useState(false);
    const [complaints, setComplaints] = useState(initialComplaints);

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "completed":
                return "bg-green-500";
            case "en route":
                return "bg-blue-500";
            case "cancelled":
                return "bg-red-500";
            case "scheduled":
                return "bg-orange-500";
            default:
                return "bg-gray-500";
        }
    };

    const handleOpenComplaintDialog = (ride) => {
        setSelectedRide(ride);
        setIsComplaintDialogOpen(true);
    };

    const handleCancelRide = () => {};

    const handleCarSelect = () => {};

    const handleSubmitComplaint = () => {
        const newComplaint = {
            id: complaints.length + 1,
            rideId: selectedRide.id,
            against: complaintType,
            description: complaintDescription,
            status: "Under Review",
        };
        setComplaints([...complaints, newComplaint]);
        setIsComplaintDialogOpen(false);
        setComplaintType("");
        setComplaintDescription("");
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">My Rides</h1>
            <Tabs defaultValue="history" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="history">Booking History</TabsTrigger>
                    <TabsTrigger value="created">Created Rides</TabsTrigger>
                    <TabsTrigger value="complaints">Complaints</TabsTrigger>
                </TabsList>
                <TabsContent value="history">
                    <BookingHistory />
                </TabsContent>
                <TabsContent value="created">
                    <CreatedRides />
                </TabsContent>
                <TabsContent value="complaints">
                    <Complaints />
                </TabsContent>
            </Tabs>

            {/* complaint dialog */}
            


            

        </div>
    );
}
