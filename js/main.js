/* ============================================
   CITY PLACE DOHA — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  const WHATSAPP = '97477785852';
  let propertiesData = [
    {
      "id": 1, "title": "Luxury Studio in Al Sadd", "type": "Studio", "price": 2500,
      "location": "Al Sadd", "area": 45, "bedrooms": 0, "bathrooms": 1,
      "description": "A beautifully furnished studio apartment in the heart of Al Sadd. Features modern amenities, air conditioning, and is close to public transport, shopping malls, and restaurants. Perfect for singles or couples looking for affordable yet comfortable living in Doha.",
      "features": ["Fully Furnished", "Air Conditioning", "Wi-Fi Ready", "24/7 Security", "Parking", "Close to Metro"],
      "images": ["images/bedroom-1.jpg", "images/living-room.jpg", "images/bathroom.jpg"], "available": true
    },
    {
      "id": 2, "title": "Spacious 1 BHK in Al Muntazah", "type": "1 BHK", "price": 3200,
      "location": "Al Muntazah", "area": 70, "bedrooms": 1, "bathrooms": 1,
      "description": "A spacious 1-bedroom apartment located in the vibrant Al Muntazah area. This unit boasts a large living room, separate kitchen, and a well-appointed bedroom with ample storage. Ideal for professionals and small families seeking convenience and comfort.",
      "features": ["Semi-Furnished", "Air Conditioning", "Balcony", "24/7 Security", "Parking", "Gym Access"],
      "images": ["images/living-room.jpg", "images/bedroom-1.jpg", "images/kitchen.jpg", "images/bathroom.jpg"], "available": true
    },
    {
      "id": 3, "title": "Modern 2 BHK in West Bay", "type": "2 BHK", "price": 5500,
      "location": "West Bay", "area": 110, "bedrooms": 2, "bathrooms": 2,
      "description": "A stunning 2-bedroom apartment in Doha's prestigious West Bay district. Enjoy panoramic city views, premium finishes, and access to world-class amenities. This property is perfect for families who want luxury living at an affordable price.",
      "features": ["Fully Furnished", "Air Conditioning", "Sea View", "Pool", "Gym", "24/7 Security", "Parking", "Children's Play Area"],
      "images": ["images/bedroom-2.jpg", "images/bedroom-1.jpg", "images/living-room.jpg", "images/kitchen.jpg", "images/bathroom.jpg"], "available": true
    },
    {
      "id": 4, "title": "Cozy Studio in Bin Mahmoud", "type": "Studio", "price": 2200,
      "location": "Bin Mahmoud", "area": 38, "bedrooms": 0, "bathrooms": 1,
      "description": "A cozy and well-maintained studio apartment in the popular Bin Mahmoud area. Walking distance to shops, restaurants, and public transport. Features include built-in wardrobes, a compact kitchen, and modern bathroom fixtures.",
      "features": ["Fully Furnished", "Air Conditioning", "Wi-Fi Ready", "Laundry", "Close to Metro"],
      "images": ["images/bedroom-2.jpg", "images/kitchen.jpg", "images/bathroom.jpg"], "available": true
    },
    {
      "id": 5, "title": "Premium 1 BHK in Al Duhail", "type": "1 BHK", "price": 3500,
      "location": "Al Duhail", "area": 75, "bedrooms": 1, "bathrooms": 1,
      "description": "A premium 1-bedroom apartment in the quiet residential neighborhood of Al Duhail. Features a spacious master bedroom with en-suite bathroom, open-plan kitchen, and generous living area. Perfect for those who value peace and privacy.",
      "features": ["Semi-Furnished", "Air Conditioning", "Garden View", "Parking", "24/7 Security", "Storage Room"],
      "images": ["images/bedroom-1.jpg", "images/kitchen.jpg", "images/living-room.jpg", "images/bathroom.jpg"], "available": true
    },
    {
      "id": 6, "title": "Family 2 BHK in Al Wakra", "type": "2 BHK", "price": 4200,
      "location": "Al Wakra", "area": 100, "bedrooms": 2, "bathrooms": 2,
      "description": "A family-friendly 2-bedroom apartment in the charming Al Wakra area. Close to schools, parks, and the beautiful Al Wakra Souq. Both bedrooms are spacious with built-in wardrobes, and the apartment features a large living-dining area.",
      "features": ["Unfurnished", "Air Conditioning", "Balcony", "Parking", "24/7 Security", "Near Schools", "Pet Friendly"],
      "images": ["images/living-room.jpg", "images/bedroom-2.jpg", "images/bedroom-1.jpg", "images/kitchen.jpg", "images/bathroom.jpg"], "available": true
    },
    {
      "id": 7, "title": "Elegant Studio in Musheireb", "type": "Studio", "price": 2800,
      "location": "Musheireb", "area": 42, "bedrooms": 0, "bathrooms": 1,
      "description": "An elegant studio in Doha's cultural heart, Musheireb. This newly renovated unit features premium fixtures, smart home capabilities, and is surrounded by cafes, art galleries, and heritage sites. A unique living experience in downtown Doha.",
      "features": ["Fully Furnished", "Smart Home", "Air Conditioning", "Wi-Fi", "Concierge", "Close to Souq Waqif"],
      "images": ["images/bedroom-1.jpg", "images/bathroom.jpg", "images/living-room.jpg"], "available": true
    },
    {
      "id": 8, "title": "Deluxe 1 BHK in The Pearl", "type": "1 BHK", "price": 4500,
      "location": "The Pearl", "area": 80, "bedrooms": 1, "bathrooms": 1,
      "description": "A deluxe 1-bedroom apartment on The Pearl-Qatar, one of Doha's most iconic destinations. Enjoy waterfront living with access to premium dining, retail, and entertainment. The apartment features high-end finishes throughout.",
      "features": ["Fully Furnished", "Sea View", "Pool", "Gym", "Beach Access", "Concierge", "Parking", "24/7 Security"],
      "images": ["images/bedroom-2.jpg", "images/living-room.jpg", "images/kitchen.jpg", "images/bathroom.jpg"], "available": true
    },
    {
      "id": 9, "title": "Grand 2 BHK in Lusail", "type": "2 BHK", "price": 6000,
      "location": "Lusail", "area": 120, "bedrooms": 2, "bathrooms": 2,
      "description": "A grand 2-bedroom apartment in the futuristic Lusail City. This brand-new unit features floor-to-ceiling windows, designer interiors, and access to state-of-the-art facilities. Live in Qatar's city of the future with all modern conveniences at your doorstep.",
      "features": ["Fully Furnished", "Smart Home", "City View", "Pool", "Gym", "Sauna", "Children's Area", "Parking", "24/7 Security"],
      "images": ["images/living-room.jpg", "images/bedroom-1.jpg", "images/bedroom-2.jpg", "images/kitchen.jpg", "images/bathroom.jpg"], "available": true
    }
  ];

  // ── Utilities ──
  function formatPrice(price) {
    return 'QAR ' + price.toLocaleString();
  }

  function getParams() {
    return new URLSearchParams(window.location.search);
  }

  // ── Navbar scroll effect ──
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // ── Mobile hamburger ──
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });
    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Scroll animations ──
  function initScrollAnimations() {
    var elements = document.querySelectorAll('.fade-up');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  // ── Load properties data ──
  function loadProperties(callback) {
    callback(propertiesData);
  }

  // ── Property Card HTML ──
  function createPropertyCard(property) {
    var bedroomText = property.bedrooms === 0 ? 'Studio' : property.bedrooms + ' Bed';
    var card = document.createElement('a');
    card.href = 'property.html?id=' + property.id;
    card.className = 'property-card fade-up';
    card.innerHTML =
      '<div class="property-card-image">' +
        '<img src="' + property.images[0] + '" alt="' + property.title + '" loading="lazy">' +
        '<div class="property-card-badge">' + property.type + '</div>' +
      '</div>' +
      '<div class="property-card-body">' +
        '<div class="property-card-header">' +
          '<h3>' + property.title + '</h3>' +
          '<div class="property-card-price">' + formatPrice(property.price) + ' <span>/mo</span></div>' +
        '</div>' +
        '<div class="property-card-location">' +
          '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ' +
          property.location + ', Doha' +
        '</div>' +
        '<div class="property-card-meta">' +
          '<span><span class="meta-icon">&#9642;</span> ' + bedroomText + '</span>' +
          '<span><span class="meta-icon">&#9642;</span> ' + property.bathrooms + ' Bath</span>' +
          '<span><span class="meta-icon">&#9642;</span> ' + property.area + ' m&sup2;</span>' +
        '</div>' +
      '</div>';
    return card;
  }

  // ── Home: Featured Properties ──
  var featuredGrid = document.getElementById('featuredProperties');
  if (featuredGrid) {
    loadProperties(function (data) {
      var featured = data.slice(0, 6);
      featured.forEach(function (p) {
        featuredGrid.appendChild(createPropertyCard(p));
      });
      initScrollAnimations();
    });
  }

  // ── Listings Page ──
  var listingsGrid = document.getElementById('listingsGrid');
  if (listingsGrid) {
    loadProperties(function (data) {
      // Populate location filter
      var locationSelect = document.getElementById('filterLocation');
      if (locationSelect) {
        var locations = [];
        data.forEach(function (p) {
          if (locations.indexOf(p.location) === -1) locations.push(p.location);
        });
        locations.sort();
        locations.forEach(function (loc) {
          var opt = document.createElement('option');
          opt.value = loc;
          opt.textContent = loc;
          locationSelect.appendChild(opt);
        });
      }

      // Check URL params for pre-set filters
      var params = getParams();
      var typeParam = params.get('type');
      if (typeParam) {
        var filterType = document.getElementById('filterType');
        if (filterType) {
          for (var i = 0; i < filterType.options.length; i++) {
            if (filterType.options[i].value === typeParam) {
              filterType.value = typeParam;
              break;
            }
          }
        }
      }

      renderListings(data);

      // Filter events
      var applyBtn = document.getElementById('applyFilters');
      var clearBtn = document.getElementById('clearFilters');

      if (applyBtn) {
        applyBtn.addEventListener('click', function () { renderListings(data); });
      }
      if (clearBtn) {
        clearBtn.addEventListener('click', function () {
          document.getElementById('filterType').value = '';
          document.getElementById('filterPrice').value = '';
          document.getElementById('filterLocation').value = '';
          renderListings(data);
        });
      }

      initScrollAnimations();
    });
  }

  function renderListings(data) {
    var grid = document.getElementById('listingsGrid');
    var noResults = document.getElementById('noResults');
    var resultsInfo = document.getElementById('resultsInfo');
    if (!grid) return;

    var typeVal = document.getElementById('filterType') ? document.getElementById('filterType').value : '';
    var priceVal = document.getElementById('filterPrice') ? document.getElementById('filterPrice').value : '';
    var locVal = document.getElementById('filterLocation') ? document.getElementById('filterLocation').value : '';

    var filtered = data.filter(function (p) {
      if (typeVal && p.type !== typeVal) return false;
      if (priceVal && p.price > parseInt(priceVal)) return false;
      if (locVal && p.location !== locVal) return false;
      return true;
    });

    grid.innerHTML = '';
    if (filtered.length === 0) {
      grid.style.display = 'none';
      if (noResults) noResults.style.display = 'block';
    } else {
      grid.style.display = '';
      if (noResults) noResults.style.display = 'none';
      filtered.forEach(function (p) {
        grid.appendChild(createPropertyCard(p));
      });
    }

    if (resultsInfo) {
      resultsInfo.innerHTML = 'Showing <strong>' + filtered.length + '</strong> of <strong>' + data.length + '</strong> properties';
    }

    // Re-init scroll animations for new cards
    initScrollAnimations();
  }

  // ── Property Detail Page ──
  var propertyGallery = document.getElementById('propertyGallery');
  if (propertyGallery) {
    var id = parseInt(getParams().get('id'));
    if (!id) {
      window.location.href = 'listings.html';
      return;
    }

    loadProperties(function (data) {
      var property = null;
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === id) { property = data[i]; break; }
      }

      if (!property) {
        window.location.href = 'listings.html';
        return;
      }

      // Update page title
      document.title = property.title + ' — City Place Doha';

      // Gallery
      var galleryHTML = '<div class="gallery-main" onclick="openLightbox(0)">' +
        '<img src="' + property.images[0] + '" alt="' + property.title + '">' +
        '</div><div class="gallery-side">';

      if (property.images[1]) {
        galleryHTML += '<div class="gallery-side-img" onclick="openLightbox(1)">' +
          '<img src="' + property.images[1] + '" alt="' + property.title + '">' +
          '</div>';
      }
      if (property.images[2]) {
        galleryHTML += '<div class="gallery-side-img" onclick="openLightbox(2)">' +
          '<img src="' + property.images[2] + '" alt="' + property.title + '">' +
          '</div>';
      }
      galleryHTML += '</div>';
      propertyGallery.innerHTML = galleryHTML;

      // Main content
      var bedroomText = property.bedrooms === 0 ? 'Studio' : property.bedrooms;
      var mainHTML =
        '<div class="detail-header">' +
          '<div class="detail-type">' + property.type + '</div>' +
          '<h1>' + property.title + '</h1>' +
          '<div class="detail-location">' +
            '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ' +
            property.location + ', Doha, Qatar' +
          '</div>' +
        '</div>' +
        '<div class="detail-meta-grid">' +
          '<div class="detail-meta-item"><div class="meta-value">' + property.area + ' m&sup2;</div><div class="meta-label">Area</div></div>' +
          '<div class="detail-meta-item"><div class="meta-value">' + bedroomText + '</div><div class="meta-label">Bedrooms</div></div>' +
          '<div class="detail-meta-item"><div class="meta-value">' + property.bathrooms + '</div><div class="meta-label">Bathrooms</div></div>' +
          '<div class="detail-meta-item"><div class="meta-value">' + (property.available ? 'Yes' : 'No') + '</div><div class="meta-label">Available</div></div>' +
        '</div>' +
        '<div class="detail-section">' +
          '<h2>Description</h2>' +
          '<p>' + property.description + '</p>' +
        '</div>' +
        '<div class="detail-section">' +
          '<h2>Features & Amenities</h2>' +
          '<div class="features-grid">' +
            property.features.map(function (f) {
              return '<div class="feature-item"><span class="feature-check">&#10003;</span> ' + f + '</div>';
            }).join('') +
          '</div>' +
        '</div>';

      document.getElementById('propertyMain').innerHTML = mainHTML;

      // Sidebar
      var waMsg = encodeURIComponent('Hi, I\'m interested in: ' + property.title + ' (' + property.type + ') in ' + property.location + ' for ' + formatPrice(property.price) + '/month. Property ID: ' + property.id);
      var sidebarHTML =
        '<div class="sidebar-card">' +
          '<div class="sidebar-price"><h3>' + formatPrice(property.price) + '</h3><span>/month</span></div>' +
          '<a href="https://wa.me/' + WHATSAPP + '?text=' + waMsg + '" class="btn btn-whatsapp" target="_blank">' +
            '<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>' +
            ' WhatsApp Inquiry' +
          '</a>' +
          '<a href="tel:+' + WHATSAPP + '" class="btn btn-primary">' +
            '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
            ' Call Now' +
          '</a>' +
          '<a href="contact.html" class="btn btn-outline">Send Inquiry</a>' +
          '<div class="sidebar-contact">' +
            '<p>Direct line</p>' +
            '<a href="tel:+' + WHATSAPP + '">+974 7778 5852</a>' +
          '</div>' +
        '</div>';

      document.getElementById('propertySidebar').innerHTML = sidebarHTML;

      // Similar properties (same type, different id)
      var similarGrid = document.getElementById('similarProperties');
      if (similarGrid) {
        var similar = data.filter(function (p) {
          return p.type === property.type && p.id !== property.id;
        }).slice(0, 3);

        if (similar.length === 0) {
          similar = data.filter(function (p) { return p.id !== property.id; }).slice(0, 3);
        }

        similar.forEach(function (p) {
          similarGrid.appendChild(createPropertyCard(p));
        });
      }

      // Lightbox
      window.currentLightboxImages = property.images;
      window.currentLightboxIndex = 0;

      initScrollAnimations();
    });
  }

  // ── Lightbox ──
  window.openLightbox = function (index) {
    var lightbox = document.getElementById('lightbox');
    var img = document.getElementById('lightboxImg');
    if (!lightbox || !img || !window.currentLightboxImages) return;

    window.currentLightboxIndex = index;
    img.src = window.currentLightboxImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxPrev = document.getElementById('lightboxPrev');
  var lightboxNext = document.getElementById('lightboxNext');
  var lightbox = document.getElementById('lightbox');

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!window.currentLightboxImages) return;
      var idx = window.currentLightboxIndex - 1;
      if (idx < 0) idx = window.currentLightboxImages.length - 1;
      window.openLightbox(idx);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!window.currentLightboxImages) return;
      var idx = window.currentLightboxIndex + 1;
      if (idx >= window.currentLightboxImages.length) idx = 0;
      window.openLightbox(idx);
    });
  }

  function closeLightbox() {
    var lb = document.getElementById('lightbox');
    if (lb) {
      lb.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Keyboard nav for lightbox
  document.addEventListener('keydown', function (e) {
    var lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
    if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
  });

  // ── Contact Form Validation ──
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      // Clear previous errors
      contactForm.querySelectorAll('.form-group').forEach(function (g) {
        g.classList.remove('error');
      });

      // Name
      var name = document.getElementById('name');
      if (!name.value.trim()) {
        name.closest('.form-group').classList.add('error');
        valid = false;
      }

      // Phone
      var phone = document.getElementById('phone');
      var phoneVal = phone.value.trim().replace(/[\s\-\(\)]/g, '');
      if (!phoneVal || phoneVal.length < 8) {
        phone.closest('.form-group').classList.add('error');
        valid = false;
      }

      // Email (optional, but if filled must be valid)
      var email = document.getElementById('email');
      if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        email.closest('.form-group').classList.add('error');
        valid = false;
      }

      // Message
      var message = document.getElementById('message');
      if (!message.value.trim()) {
        message.closest('.form-group').classList.add('error');
        valid = false;
      }

      if (!valid) return;

      // Show success (in production, you'd submit to a backend)
      contactForm.style.display = 'none';
      document.querySelector('.contact-form h3').style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    });
  }

  // ── Init ──
  initScrollAnimations();

})();
