<Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-white rounded-lg p-6 h-full">
    <ModalHeader>
        <p h2 className="text-center">
            {selected.name}
        </p>
    </ModalHeader>
    <ModalBody className="flex flex-col h-full">
        <div className="relative w-full h-64">
            <img
                src={selected.imageUrl}
                alt={selected.name}
                className="object-cover w-full h-full rounded-lg filter brightness-50"
            />
        </div>

        <h4 className="mt-4">{selected.address}</h4>
        <p className="text-gray-600">{selected.food}</p>

        {/* Chips for Tags */}
        <div className="flex flex-wrap mt-3 gap-2">
            {selected.tags?.map((tag, index) => (
                <Chip key={index} color="primary" variant="outlined">
                    {tag}
                </Chip>
            ))}
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700">
            {selected.description}
        </p>

        {/* Pickup Spot */}
        <div className="mt-4">
            <h4>Pickup Spot:</h4>
            <p className="text-gray-600">{selected.pickupSpot}</p>
        </div>

        {/* Date Selection */}
        <div className="mt-4">
            <h4>Select Pickup Date:</h4>
            <Calendar
                onChange={setSelectedDate}
                className="mt-2"
            />
            {selectedDate && (
                <p className="mt-2 text-gray-600">
                    Selected Date: {selectedDate.toLocaleDateString()}
                </p>
            )}
        </div>
    </ModalBody>

    <ModalFooter>
        <Button color="primary" auto onClick={() => {/* Handle booking */ }}>
            Book Now
        </Button>
        <Button color="error" auto onClick={onClose}>
            Close
        </Button>
    </ModalFooter>
</Modal>