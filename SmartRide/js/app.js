document.addEventListener("submit", (e) => {
  const form = e.target;

  if (form.id === "loginForm") {
    e.preventDefault();

    const email = form.querySelector("#loginEmail").value.trim();
    const password = form.querySelector("#loginPassword").value.trim();
    const savedUser = JSON.parse(localStorage.getItem("SmartRideUser"));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      localStorage.setItem("SmartRideLoggedIn", "true");   
      alert("Login successful! Welcome back to SmartRide.");
      form.reset();

      window.location.href = "index.html";
    } else {
      alert("Invalid credentials. Please check your email or password.");
    }
  }

  if (form.id === "signupForm") {
    e.preventDefault();
    const email = form.querySelector("#signupEmail").value.trim();
    const password = form.querySelector("#signupPassword").value.trim();

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    localStorage.setItem("SmartRideUser", JSON.stringify({ email, password }));
    alert("Registration successful! You can now log in.");
    form.reset();

    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("authTitle").textContent = "Login to SmartRide";
  }
});

const AppData = {
    users: [
        { id: 1, name: "Demo User", email: "demo@example.com", password: "demo123", phone: "+91 98765 43210", role: "CUSTOMER", licenseNumber: "TN0120230045678", rewardPoints: 450, membershipTier: "Gold" },
        { id: 2, name: "Owner Demo", email: "owner@example.com", password: "owner123", phone: "+91 98765 43211", role: "OWNER", licenseNumber: "TN0220230056789", rewardPoints: 200, membershipTier: "Silver" }
    ],
    vehicles: [
        // ELECTRIC VEHICLES

        { id: 1, name: "Tata Nexon EV", model: "Max Long Range", year: 2024, type: "Electric", category: "SUV", seatingCapacity: 5, transmission: "Automatic", pricePerHour: 180, pricePerDay: 1800, pricePerWeek: 10800, pricePerMonth: 45000, features: ["AC", "GPS", "Fast Charging"], ownerType: "Company", rating: 4.6, reviewCount: 178, available: true, ecoRating: 5, carbonOffset: 0, color: "Blue", emoji: "⚡", imageUrl: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&q=80" },

        // LUXURY CARS

        { id: 4, name: "BMW 5 Series", model: "520d M Sport", year: 2024, type: "Diesel", category: "Luxury", seatingCapacity: 5, transmission: "Automatic", pricePerHour: 1000, pricePerDay: 9000, pricePerWeek: 54000, pricePerMonth: 225000, features: ["Premium AC", "GPS", "Leather Seats", "Head-up Display"], ownerType: "Company", rating: 4.9, reviewCount: 72, available: true, ecoRating: 2, carbonOffset: 180, color: "Grey", emoji: "💎", imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80" },

        { id: 5, name: "Audi A4", model: "Premium Plus", year: 2024, type: "Petrol", category: "Luxury", seatingCapacity: 5, transmission: "Automatic", pricePerHour: 800, pricePerDay: 7000, pricePerWeek: 42000, pricePerMonth: 175000, features: ["Premium AC", "GPS", "Virtual Cockpit", "Matrix LED"], ownerType: "Company", rating: 4.8, reviewCount: 88, available: true, ecoRating: 2, carbonOffset: 190, color: "Black", emoji: "💎", imageUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80" },

        // SUVS
        { id: 6, name: "Toyota Fortuner", model: "Legender 4x4", year: 2024, type: "Diesel", category: "SUV", seatingCapacity: 7, transmission: "Automatic", pricePerHour: 450, pricePerDay: 4000, pricePerWeek: 24000, pricePerMonth: 100000, features: ["AC", "GPS", "Leather Seats", "Sunroof"], ownerType: "P2P", rating: 4.6, reviewCount: 89, available: true, ecoRating: 2, carbonOffset: 180, color: "Black", emoji: "🚙", imageUrl: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80" },

        { id: 7, name: "Mahindra Thar", model: "LX Hard Top Diesel AT", year: 2024, type: "Diesel", category: "SUV", seatingCapacity: 4, transmission: "Automatic", pricePerHour: 280, pricePerDay: 3200, pricePerWeek: 19200, pricePerMonth: 80000, features: ["AC", "4WD", "Off-road Package"], ownerType: "P2P", rating: 4.7, reviewCount: 156, available: true, ecoRating: 2, carbonOffset: 160, color: "Red", emoji: "🏔️", imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80" },

        { id: 8, name: "Hyundai Creta", model: "SX(O) Turbo", year: 2024, type: "Petrol", category: "SUV", seatingCapacity: 5, transmission: "Automatic", pricePerHour: 160, pricePerDay: 1600, pricePerWeek: 9600, pricePerMonth: 40000, features: ["AC", "GPS", "Sunroof", "Ventilated Seats"], ownerType: "Company", rating: 4.7, reviewCount: 234, available: true, ecoRating: 3, carbonOffset: 130, color: "White", emoji: "🚙", imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80" },

        { id: 9, name: "Kia Seltos", model: "GTX Plus", year: 2023, type: "Diesel", category: "SUV", seatingCapacity: 5, transmission: "Automatic", pricePerHour: 160, pricePerDay: 1600, pricePerWeek: 9600, pricePerMonth: 40000, features: ["AC", "GPS", "Sunroof", "Bose Speakers"], ownerType: "P2P", rating: 4.5, reviewCount: 187, available: true, ecoRating: 2, carbonOffset: 150, color: "Red", emoji: "🚙", imageUrl: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=1200&q=80" },

        { id: 10, name: "Mahindra XUV700", model: "AX7 Luxury", year: 2024, type: "Diesel", category: "SUV", seatingCapacity: 7, transmission: "Automatic", pricePerHour: 430, pricePerDay: 3000, pricePerWeek: 18000, pricePerMonth: 75000, features: ["AC", "GPS", "Panoramic Sunroof", "ADAS"], ownerType: "P2P", rating: 4.7, reviewCount: 143, available: true, ecoRating: 2, carbonOffset: 170, color: "White", emoji: "🚙", imageUrl: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=80" },

        // SEDANS
        { id: 11, name: "Honda City", model: "VX CVT", year: 2023, type: "Petrol", category: "Sedan", seatingCapacity: 5, transmission: "Automatic", pricePerHour: 200, pricePerDay: 1800, pricePerWeek: 10800, pricePerMonth: 45000, features: ["AC", "GPS", "Bluetooth"], ownerType: "Company", rating: 4.5, reviewCount: 201, available: true, ecoRating: 3, carbonOffset: 120, color: "Silver", emoji: "🚗", imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80" },

        { id: 12, name: "Honda Amaze", model: "VX CVT", year: 2023, type: "Petrol", category: "Sedan", seatingCapacity: 5, transmission: "Automatic", pricePerHour: 150, pricePerDay: 1500, pricePerWeek: 9000, pricePerMonth: 37500, features: ["AC", "Bluetooth", "Rear Camera"], ownerType: "P2P", rating: 4.4, reviewCount: 198, available: true, ecoRating: 3, carbonOffset: 105, color: "White", emoji: "🚗", imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80" },

        // HATCHBACKS
        { id: 13, name: "Maruti Swift", model: "ZXI+", year: 2023, type: "Petrol", category: "Hatchback", seatingCapacity: 5, transmission: "Manual", pricePerHour: 120, pricePerDay: 1200, pricePerWeek: 7200, pricePerMonth: 30000, features: ["AC", "Bluetooth"], ownerType: "Company", rating: 4.4, reviewCount: 312, available: true, ecoRating: 3, carbonOffset: 100, color: "Blue", emoji: "🚕", imageUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80" },

        // MUVs
        { id: 14, name: "Maruti Ertiga", model: "VXI Plus", year: 2023, type: "Petrol", category: "MUV", seatingCapacity: 7, transmission: "Manual", pricePerHour: 140, pricePerDay: 1400, pricePerWeek: 8400, pricePerMonth: 35000, features: ["AC", "GPS", "Bluetooth"], ownerType: "Company", rating: 4.3, reviewCount: 267, available: true, ecoRating: 3, carbonOffset: 110, color: "Silver", emoji: "🚐", imageUrl: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=1200&q=80" },


        // BIKES - SPORTS BIKES
        { id: 16, name: "Yamaha R15 V4", model: "Racing Blue", year: 2024, type: "Petrol", category: "Sports Bike", seatingCapacity: 2, transmission: "Manual", pricePerHour: 150, pricePerDay: 1500, pricePerWeek: 9000, pricePerMonth: 36000, features: ["ABS", "Digital Display", "LED Lights"], ownerType: "P2P", rating: 4.7, reviewCount: 145, available: true, ecoRating: 4, carbonOffset: 50, color: "Blue", emoji: "🏍️", imageUrl: "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=1200&q=80" },

        { id: 17, name: "KTM Duke 390", model: "2024", year: 2024, type: "Petrol", category: "Sports Bike", seatingCapacity: 2, transmission: "Manual", pricePerHour: 200, pricePerDay: 2000, pricePerWeek: 12000, pricePerMonth: 50000, features: ["ABS", "Ride Modes", "TFT Display"], ownerType: "P2P", rating: 4.8, reviewCount: 187, available: true, ecoRating: 3, carbonOffset: 60, color: "Orange", emoji: "🏍️", imageUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1200&q=80" },

        { id: 18, name: "Kawasaki Ninja 300", model: "BS6", year: 2023, type: "Petrol", category: "Sports Bike", seatingCapacity: 2, transmission: "Manual", pricePerHour: 220, pricePerDay: 2200, pricePerWeek: 13200, pricePerMonth: 55000, features: ["ABS", "Slipper Clutch", "LED Lights"], ownerType: "Company", rating: 4.9, reviewCount: 98, available: true, ecoRating: 3, carbonOffset: 65, color: "Green", emoji: "🏍️", imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200&q=80" },

        // SCOOTERS
        { id: 25, name: "Ola S1 Pro", model: "2024", year: 2024, type: "Electric", category: "Electric Scooter", seatingCapacity: 2, transmission: "Automatic", pricePerHour: 110, pricePerDay: 1100, pricePerWeek: 6600, pricePerMonth: 30000, features: ["Fast Charging", "Digital Display", "Hill Hold"], ownerType: "Company", rating: 4.6, reviewCount: 198, available: true, ecoRating: 5, carbonOffset: 0, color: "Black", emoji: "⚡", imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200&q=80" }
    ],

    bookings: [],
    currentUser: null,
    searchFilters: { startDate: null, endDate: null, vehicleType: "all" }
};
const savedVehicles = JSON.parse(localStorage.getItem("rentoHubVehicles"));
if (savedVehicles && Array.isArray(savedVehicles)) {
  AppData.vehicles = savedVehicles;
}



class App {
    constructor() {
        this.currentPage = 'home';
        this.init();
    }

    init() {
        this.render();
    }

    navigateTo(page) {
        this.currentPage = page;
        this.render();
    }

    render() {
        const app = document.getElementById('app');
        if (!app) {
            console.error('App element not found!');
            return;
        }

        app.innerHTML = '';
        app.appendChild(this.createHeader());

        const content = document.createElement('div');
        content.className = 'main-content';

        switch(this.currentPage) {
            case 'home':
                content.appendChild(this.renderHomePage());
                break;
            case 'vehicles':
                content.appendChild(this.renderVehiclesPage());
                break;
            case 'login':
                content.appendChild(this.renderLoginPage());
                break;
            case 'register':
                content.appendChild(this.renderRegisterPage());
                break;
            case 'bookings':
                content.appendChild(this.renderBookingsPage());
                break;
            case 'listVehicle':
                content.appendChild(this.renderListVehiclePage());
                 break;
            default:
                content.appendChild(this.renderHomePage());
        }

        app.appendChild(content);
    }

    createHeader() {
        const header = document.createElement('header');
        header.innerHTML = `
            <div class="nav-container">
                <div class="logo" onclick="app.navigateTo('home')" style="cursor: pointer;">🚗 SmartRide</div>
                <ul class="nav-menu">
  <li><a onclick="app.navigateTo('home')">Home</a></li>
  <li><a onclick="app.navigateTo('vehicles')">Vehicles</a></li>
  ${AppData.currentUser && AppData.currentUser.role === 'CUSTOMER' ? `
      <li><a onclick="app.navigateTo('bookings')">My Bookings</a></li>` : ''}
  ${AppData.currentUser && AppData.currentUser.role === 'OWNER' ? `
      <li><a onclick="app.navigateTo('listVehicle')">List My Vehicle</a></li>` : ''}
</ul>

                <div class="auth-buttons">
                    ${AppData.currentUser ? 
                        `<span style="color: white; margin-right: 1rem;">Hello, ${AppData.currentUser.name}</span>
                         <button class="btn btn-secondary" onclick="app.logout()">Logout</button>` :
                        `<button class="btn btn-secondary" onclick="app.navigateTo('login')">Login</button>
                         <button class="btn btn-primary" onclick="app.navigateTo('register')">Register</button>`
                    }
                </div>
            </div>
        `;
        return header;
    }

    renderHomePage() {
        const container = document.createElement('div');
        container.innerHTML = `
            <div class="hero">
                <h1>Find Your Perfect Ride</h1>
                <p>Rent vehicles by the hour, day, week, or month with our innovative P2P platform</p>
            </div>
            
            <div class="search-box">
                <form class="search-form" onsubmit="return app.handleSearch(event)">
                    <div class="form-group">
                        <label>Pick-up Date</label>
                        <input type="date" id="startDate" required>
                    </div>
                    <div class="form-group">
                        <label>Return Date</label>
                        <input type="date" id="endDate" required>
                    </div>
                    <div class="form-group">
                        <label>Vehicle Type</label>
                        <select id="vehicleType">
                            <option value="all">All Types</option>
                            <option value="Electric">Electric</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                        </select>
                    </div>
                    <div class="form-group" style="display: flex; align-items: flex-end;">
                        <button type="submit" class="btn btn-success" style="width: 100%;">Search Vehicles</button>
                    </div>
                </form>
            </div>

            <div class="container">
                <h2 style="text-align: center; margin: 3rem 0 2rem;">Why Choose Us?</h2>
                <div class="features">
                    <div class="feature-card">
                        <div class="feature-icon">🔋</div>
                        <h3>Eco-Friendly Options</h3>
                        <p>Choose electric and hybrid vehicles to reduce your carbon footprint</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">💰</div>
                        <h3>Best Prices</h3>
                        <p>Dynamic pricing ensures you get the best rates for your rental</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🤝</div>
                        <h3>P2P Marketplace</h3>
                        <p>Rent from local owners or list your own vehicle to earn</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📱</div>
                        <h3>Contactless</h3>
                        <p>Digital keys and paperless booking for maximum convenience</p>
                    </div>
                </div>
            </div>
        `;

        setTimeout(() => {
            const today = new Date().toISOString().split('T')[0];
            const startInput = document.getElementById('startDate');
            const endInput = document.getElementById('endDate');
            if (startInput) startInput.min = today;
            if (endInput) endInput.min = today;
        }, 100);

        return container;
    }

    handleSearch(event) {
        event.preventDefault();
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const vehicleType = document.getElementById('vehicleType').value;

        if (new Date(endDate) <= new Date(startDate)) {
            alert('Return date must be after pick-up date');
            return false;
        }

        AppData.searchFilters = { startDate, endDate, vehicleType };
        this.navigateTo('vehicles');
        return false;
    }

    renderVehiclesPage() {
        const container = document.createElement('div');
        container.className = 'container';

        let vehicles = AppData.vehicles.filter(v => v.available);

        if (AppData.searchFilters.vehicleType && AppData.searchFilters.vehicleType !== 'all') {
            vehicles = vehicles.filter(v => v.type === AppData.searchFilters.vehicleType);
        }

        container.innerHTML = `
            <h2 style="margin: 2rem 0;">Available Vehicles (${vehicles.length})</h2>
            ${AppData.searchFilters.startDate ? 
                `<p style="color: #6b7280; margin-bottom: 2rem;">
                    Showing vehicles for ${AppData.searchFilters.startDate} to ${AppData.searchFilters.endDate}
                </p>` : ''}
            <div class="vehicles-grid">
                ${vehicles.map(vehicle => this.createVehicleCard(vehicle)).join('')}
            </div>
        `;

        return container;
    }


createVehicleCard(vehicle) {
  const stars = '★'.repeat(Math.floor(vehicle.rating)) + '☆'.repeat(5 - Math.floor(vehicle.rating));

  // Use image if available, otherwise fallback to emoji
  const imageTag = vehicle.imageUrl
    ? `<img src="${vehicle.imageUrl}" alt="${vehicle.name}" loading="lazy">`
    : (vehicle.emoji || '🚗');

  return `
    <div class="vehicle-card" onclick="app.showVehicleDetails(${vehicle.id})">
      <div class="vehicle-image">${imageTag}</div>
      <div class="vehicle-info">
        <div class="vehicle-name">${vehicle.name}</div>
        <div class="vehicle-model">${vehicle.model} (${vehicle.year})</div>
        ${vehicle.ecoRating >= 4 ? '<span class="eco-badge">Eco-Friendly ♻️</span>' : ''}
        <div class="rating">${stars} (${vehicle.reviewCount})</div>
        <div style="display: flex; justify-content: space-between; margin: 0.5rem 0; color: #6b7280; font-size: 0.9rem;">
          <span>👥 ${vehicle.seatingCapacity}</span>
          <span>⚙️ ${vehicle.transmission}</span>
          <span>⛽ ${vehicle.type}</span>
        </div>
        <div class="vehicle-price">₹${vehicle.pricePerDay}/day</div>
        <button class="btn btn-primary" style="width: 100%;" onclick="event.stopPropagation(); app.bookVehicle('${vehicle.id}')">Book Now</button>
        ${AppData.currentUser && AppData.currentUser.role === 'OWNER'
            ? `<button class="btn btn-danger" style="width: 100%;" onclick="event.stopPropagation(); app.deleteVehicle(${vehicle.id})">Delete</button>`
            : ''}

      </div>
    </div>
  `;
}




    showVehicleDetails(vehicleId) {
        const vehicle = AppData.vehicles.find(v => v.id === vehicleId);
        if (!vehicle) return;

        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${vehicle.name}</h2>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
                </div>
                <div class="vehicle-image" style="width: 100%; height: 300px; margin-bottom: 1rem;">
                    ${vehicle.imageUrl ? `<img src="${vehicle.imageUrl}" alt="${vehicle.name}">` : (vehicle.emoji || '🚗')}
                </div>
                <p><strong>Model:</strong> ${vehicle.model}</p>
                <p><strong>Year:</strong> ${vehicle.year}</p>
                <p><strong>Type:</strong> ${vehicle.type}</p>
                <p><strong>Category:</strong> ${vehicle.category}</p>
                <p><strong>Seating:</strong> ${vehicle.seatingCapacity} persons</p>
                <p><strong>Transmission:</strong> ${vehicle.transmission}</p>
                <p><strong>Color:</strong> ${vehicle.color}</p>
                <p><strong>Features:</strong> ${vehicle.features.join(', ')}</p>
                <h3 style="margin-top: 1.5rem;">Pricing:</h3>
                <p>Hourly: ₹${vehicle.pricePerHour} | Daily: ₹${vehicle.pricePerDay}</p>
                <p>Weekly: ₹${vehicle.pricePerWeek} | Monthly: ₹${vehicle.pricePerMonth}</p>
                <button class="btn btn-success" style="width: 100%; margin-top: 1rem;" onclick="app.bookVehicle(${vehicle.id}); this.closest('.modal').remove();">Book This Vehicle</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    deleteVehicle(vehicleId) {
  if (!confirm("Are you sure you want to delete this vehicle?")) return;

  AppData.vehicles = AppData.vehicles.filter(v => v.id !== vehicleId);

  localStorage.setItem("rentoHubVehicles", JSON.stringify(AppData.vehicles));

  alert("🚗 Vehicle deleted successfully!");
  this.navigateTo("vehicles"); 
}


    bookVehicle(vehicleId) {
    console.log("Booking vehicle ID:", vehicleId); 

    if (!AppData.currentUser) {
        alert('Please login to book a vehicle');
        this.navigateTo('login');
        return;
    }

    const vehicle = AppData.vehicles.find(v => String(v.id) === String(vehicleId));
    if (!vehicle) {
        console.error("Vehicle not found for ID:", vehicleId);
        alert("Sorry, this vehicle could not be found.");
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Book ${vehicle.name}</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <form onsubmit="return app.confirmBooking(event, ${vehicle.id})">
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="date" id="bookingStartDate" value="${AppData.searchFilters.startDate || ''}" required>
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="date" id="bookingEndDate" value="${AppData.searchFilters.endDate || ''}" required>
                </div>
                <div class="form-group">
                    <label>Insurance Type</label>
                    <select id="insuranceType" required>
                        <option value="Basic">Basic (₹5/day)</option>
                        <option value="Comprehensive">Comprehensive (₹15/day)</option>
                    </select>
                </div>
                <div style="background: #f3f4f6; padding: 1rem; border-radius: 5px; margin: 1rem 0;">
                    <p><strong>Price per day:</strong> ₹${vehicle.pricePerDay}</p>
                    <p id="totalCostDisplay"><strong>Total Cost:</strong> Calculating...</p>
                    ${vehicle.ecoRating >= 4 ? '<p style="color: #10b981;">🌱 Eco-friendly choice! Earn 50 reward points</p>' : ''}
                </div>
                <button type="submit" class="btn btn-success" style="width: 100%;">Confirm Booking</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    setTimeout(() => {
        const today = new Date().toISOString().split('T')[0];
        const startInput = document.getElementById('bookingStartDate');
        const endInput = document.getElementById('bookingEndDate');
        if (startInput) startInput.min = today;
        if (endInput) endInput.min = today;

        const calculateTotal = () => {
            if (!startInput || !endInput) return;
            const start = new Date(startInput.value);
            const end = new Date(endInput.value);
            const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

            if (days > 0) {
                const insuranceElement = document.getElementById('insuranceType');
                const insurance = (insuranceElement && insuranceElement.value === 'Basic') ? 5 : 15;
                const total = (vehicle.pricePerDay * days) + (insurance * days);
                const display = document.getElementById('totalCostDisplay');
                if (display) display.innerHTML = `<strong>Total Cost:</strong> ₹${total} (${days} days)`;
            }
        };

        const insuranceElement = document.getElementById('insuranceType');
        if (startInput && endInput && insuranceElement) {
            startInput.addEventListener('change', calculateTotal);
            endInput.addEventListener('change', calculateTotal);
            insuranceElement.addEventListener('change', calculateTotal);
            calculateTotal(); 
        }
    }, 100);
}


    confirmBooking(event, vehicleId) {
        event.preventDefault();

        const startDate = document.getElementById('bookingStartDate').value;
        const endDate = document.getElementById('bookingEndDate').value;
        const insuranceType = document.getElementById('insuranceType').value;

        const vehicle = AppData.vehicles.find(v => v.id === vehicleId);
        const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
        const insurance = insuranceType === 'Basic' ? 5 : 15;
        const totalCost = (vehicle.pricePerDay * days) + (insurance * days);

        const booking = {
            id: AppData.bookings.length + 1,
            userId: AppData.currentUser.id,
            vehicleId: vehicleId,
            vehicleName: vehicle.name,
            startDate: startDate,
            endDate: endDate,
            status: 'CONFIRMED',
            totalCost: totalCost,
            insuranceType: insuranceType,
            carbonSaved: vehicle.ecoRating >= 4 ? days * 50 : 0,
            createdAt: new Date().toISOString()
        };

        AppData.bookings.push(booking);

        if (vehicle.ecoRating >= 4) {
            AppData.currentUser.rewardPoints += 50;
        }

        const modal = document.querySelector('.modal');
        if (modal) modal.remove();

        alert('Booking confirmed successfully! Check "My Bookings" to view details.');
        this.navigateTo('bookings');

        return false;
    }

    renderLoginPage() {
        const container = document.createElement('div');
        container.className = 'auth-container';
        container.innerHTML = `
            <h2>Login to Your Account</h2>
            <form class="auth-form" onsubmit="return app.handleLogin(event)">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="loginEmail" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="loginPassword" placeholder="Enter your password" required>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <div class="auth-toggle">
                Don't have an account? <a onclick="app.navigateTo('register')">Register here</a>
            </div>
        `;
        return container;
    }

    handleLogin(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const user = AppData.users.find(u => u.email === email && u.password === password);

        if (user) {
            AppData.currentUser = user;
            alert('Login successful!');
            this.navigateTo('home');
        } else {
            alert('Invalid email or password');
        }
        return false;
    }

    renderRegisterPage() {
        const container = document.createElement('div');
        container.className = 'auth-container';
        container.innerHTML = `
            <h2>Create New Account</h2>
            <form class="auth-form" onsubmit="return app.handleRegister(event)">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" id="regName" placeholder="Enter your name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="regEmail" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="regPassword" placeholder="Create a password" required minlength="6">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="tel" id="regPhone" placeholder="+91 XXXXXXXXXX" required>
                </div>
                <div class="form-group">
                    <label>License Number</label>
                    <input type="text" id="regLicense" placeholder="Your driving license number" required>
                </div>
                <div class="form-group">
                    <label>Register as</label>
                    <select id="regRole" required>
                        <option value="CUSTOMER">Customer (Rent vehicles)</option>
                        <option value="OWNER">Owner (List my vehicles)</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-success">Register</button>
            </form>
            <div class="auth-toggle">
                Already have an account? <a onclick="app.navigateTo('login')">Login here</a>
            </div>
        `;
        return container;
    }

    handleRegister(event) {
        event.preventDefault();
        const newUser = {
            id: AppData.users.length + 1,
            name: document.getElementById('regName').value,
            email: document.getElementById('regEmail').value,
            password: document.getElementById('regPassword').value,
            phone: document.getElementById('regPhone').value,
            licenseNumber: document.getElementById('regLicense').value,
            role: document.getElementById('regRole').value,
            rewardPoints: 0,
            membershipTier: 'Bronze'
        };

        if (AppData.users.find(u => u.email === newUser.email)) {
            alert('Email already registered');
            return false;
        }

        AppData.users.push(newUser);
        AppData.currentUser = newUser;
        alert('Registration successful!');
        this.navigateTo('home');
        return false;
    }

    renderBookingsPage() {
        if (!AppData.currentUser) {
            this.navigateTo('login');
            return document.createElement('div');
        }

        const container = document.createElement('div');
        container.className = 'container';
        const userBookings = AppData.bookings.filter(b => b.userId === AppData.currentUser.id);

        container.innerHTML = `
            <h2 style="margin: 2rem 0;">My Bookings</h2>
            ${userBookings.length === 0 ? 
                '<p style="text-align: center; color: #6b7280; padding: 3rem;">No bookings yet. <a onclick="app.navigateTo(\'vehicles\')" style="color: #2563eb; cursor: pointer;">Browse vehicles</a> to make your first booking!</p>' :
                `<div class="vehicles-grid">
                    ${userBookings.map(booking => `
                        <div class="vehicle-card">
                            <div class="vehicle-image">
  ${
    (AppData.vehicles.find(v => v.id === booking.vehicleId)?.imageUrl)
      ? `<img src="${AppData.vehicles.find(v => v.id === booking.vehicleId).imageUrl}" alt="${booking.vehicleName}" style="width:100%;height:150px;object-fit:cover;border-radius:8px;">`
      : '🚗'
  }
</div>

                            <div class="vehicle-info">
                                <div class="vehicle-name">${booking.vehicleName}</div>
                                <p><strong>Booking ID:</strong> #${booking.id}</p>
                                <p><strong>Duration:</strong> ${booking.startDate} to ${booking.endDate}</p>
                                <p><strong>Status:</strong> <span style="color: #10b981;">${booking.status}</span></p>
                                <p><strong>Total Cost:</strong> ₹${booking.totalCost}</p>
                                <p><strong>Insurance:</strong> ${booking.insuranceType}</p>
                                ${booking.carbonSaved > 0 ? `<p style="color: #10b981;">🌱 Carbon Saved: ${booking.carbonSaved}g</p>` : ''}
                                <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="showDigitalKey(${booking.id}, '${booking.vehicleName}')">View Digital Key</button>
                            </div>
                        </div>
                    `).join('')}
                </div>`
            }
        `;
        return container;
    }
   
renderListVehiclePage() {
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `
    <h2 style="margin-top:2rem;">List Your Vehicle</h2>
    <form class="auth-form" onsubmit="return app.handleVehicleListing(event)">
      <div class="form-group">
        <label>Vehicle Name</label>
        <input id="vName" placeholder="e.g. Honda City" required>
      </div>
      <div class="form-group">
        <label>Model</label>
        <input id="vModel" placeholder="e.g. VX CVT" required>
      </div>
      <div class="form-group">
        <label>Price/Day (₹)</label>
        <input id="vPrice" type="number" placeholder="e.g. 1800" required>
      </div>
      <div class="form-group">
        <label>Image URL (optional)</label>
        <input id="vImage" placeholder="Paste direct image link (e.g. from Unsplash)">
      </div>
      <button type="submit" class="btn btn-success">Add Vehicle</button>
    </form>
  `;
  return container;
}


handleVehicleListing(event) {
  event.preventDefault();

  const imageInput = document.getElementById('vImage').value.trim();

  const newVehicle = {
    id: Date.now(),
    name: document.getElementById('vName').value,
    model: document.getElementById('vModel').value,
    pricePerDay: parseInt(document.getElementById('vPrice').value),
    available: true,
    ownerType: 'P2P',
    type: 'Petrol',
    seatingCapacity: 5,
    transmission: 'Manual',
    year: 2024,
    category: 'Sedan',
    features: ['AC', 'GPS'],
    color: 'Silver',
    
    imageUrl: imageInput || 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Generic_car_image.jpg'
  };

  AppData.vehicles.push(newVehicle);

  
  localStorage.setItem("rentoHubVehicles", JSON.stringify(AppData.vehicles));

  alert('✅ Vehicle listed successfully!');
  this.navigateTo('vehicles');
  return false;
}



    logout() {
        AppData.currentUser = null;
        alert('Logged out successfully');
        this.navigateTo('home');
    }
}
function showDigitalKey(bookingId, vehicleName) {
  const uniqueKey = `RH-${bookingId}-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`;
  
  const modal = document.createElement('div');
  modal.className = 'modal active';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>🔑 Digital Key</h2>
        <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
      </div>
      <div style="text-align:center; padding:1rem;">
        <h3>${vehicleName}</h3>
        <p><strong>Your unique digital key:</strong></p>
        <p style="font-size:1.2rem; background:#e0e7ff; display:inline-block; padding:10px 20px; border-radius:8px; font-weight:bold; color:#1d4ed8;">${uniqueKey}</p>
        <p style="margin-top:1rem;">Use this digital key to unlock and verify your vehicle booking.</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}


let app;
window.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing app...');
    app = new App();
    console.log('App initialized!');
});


document.addEventListener("submit", (e) => {
  const form = e.target;
  if (form.id === "signupForm") {
    e.preventDefault();

    const email = form.querySelector("#signupEmail").value.trim();
    const password = form.querySelector("#signupPassword").value.trim();

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    /
    localStorage.setItem("SmartRideUser", JSON.stringify({ email, password }));
    alert("Registration successful! You can now log in.");
    form.reset();
  }

  
  if (form.id === "loginForm") {
    e.preventDefault();

    const email = form.querySelector("#loginEmail").value.trim();
    const password = form.querySelector("#loginPassword").value.trim();
    const savedUser = JSON.parse(localStorage.getItem("SmartRideUser"));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
  alert("Login successful! Welcome back to SmartRide.");
  localStorage.setItem("SmartRideLoggedIn", "true");
  form.reset();

  window.location.href = "index.html"; 
}
 else {
      alert("Invalid credentials. Please check your email or password.");
    }
  }
});

function SmartRideLogout() {
  localStorage.removeItem("SmartRideLoggedIn");
  alert("You have been logged out.");
}


const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const authTitle = document.getElementById("authTitle");

document.getElementById("switchToSignup").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  signupForm.style.display = "block";
  authTitle.textContent = "Register for SmartRide";
});

document.getElementById("switchToLogin").addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.style.display = "none";
  loginForm.style.display = "block";
  authTitle.textContent = "Login to SmartRide";
});






