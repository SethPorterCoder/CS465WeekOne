// Define API endpoint and request options
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

/* GET Travel view */
const travel = async (req, res) => {
    try {
        const response = await fetch(tripsEndpoint, options); // No need for node-fetch!

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const trips = await response.json(); // Parse JSON response

        res.render('travel', {
            title: 'Travlr Getaways',
            trips // Pass API data to the view
        });
    } catch (error) {
        console.error("Error fetching trips:", error);
        
        res.render('travel', {
            title: 'Travlr Getaways',
            trips: [],
            error: "Failed to load trips from API"
        });
    }
};

module.exports = { travel };
