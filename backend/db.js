// ...Database connection setup ...

function fetchPropertyDetails(propertyId) {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM properties WHERE id = ?"; 
        connection.query(query, [propertyId], (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
}

module.exports = { fetchPropertyDetails }; 
