document.addEventListener('DOMContentLoaded', function() {
    // =============================================
    // DESKTOP NAVBAR (ORIGINAL DESIGN WITH LOCATION ADDED)
    // =============================================
    
    // Create navbar container (original styles)
    const navbar = document.createElement('div');
    navbar.id = 'navbar';
    navbar.style.position = 'fixed';
    navbar.style.left = '0';
    navbar.style.top = '0';
    navbar.style.width = '250px';
    navbar.style.height = '100vh';
    navbar.style.backgroundColor = '#fff';
    navbar.style.color = 'white';
    navbar.style.textAlign = 'center';
    navbar.style.boxShadow = '2px 0px 5px rgba(0, 0, 0, 0.1)';
    navbar.style.padding = '20px 0';
    navbar.style.boxSizing = 'border-box';
    navbar.style.display = 'flex';
    navbar.style.flexDirection = 'column';
    navbar.style.alignItems = 'center';
    navbar.style.zIndex = '1000';

    // Create logo container (original)
    const logoContainer = document.createElement('div');
    logoContainer.style.marginBottom = '30px';
    logoContainer.style.textAlign = 'center';

    // Create logo image (original)
    const logoImg = document.createElement('img');
    logoImg.src = '/eatzzo/static/images/public/logo.png';
    logoImg.alt = 'Logo';
    logoImg.style.width = '100px';
    logoImg.style.height = '100px';
    logoImg.style.borderRadius = '50%';
    logoImg.style.objectFit = 'cover';

    // Create search container (original with location added after)
    const searchContainer = document.createElement('div');
    searchContainer.style.position = 'relative';
    searchContainer.style.width = '80%';
    searchContainer.style.marginBottom = '30px';

    const searchBar = document.createElement('input');
    searchBar.type = 'search';
    searchBar.placeholder = 'Search';
    searchBar.style.width = '100%';
    searchBar.style.padding = '10px 10px 10px 35px';
    searchBar.style.borderRadius = '25px';
    searchBar.style.border = '1px solid #333';
    searchBar.style.outline = 'none';

    const searchIcon = document.createElement('i');
    searchIcon.className = 'fas fa-search';
    searchIcon.style.position = 'absolute';
    searchIcon.style.left = '10px';
    searchIcon.style.top = '50%';
    searchIcon.style.transform = 'translateY(-50%)';
    searchIcon.style.color = '#333';

    searchContainer.appendChild(searchIcon);
    searchContainer.appendChild(searchBar);

    // Add location icon after searchbar (new)
    const locationIcon = document.createElement('i');
    locationIcon.className = 'fas fa-map-marker-alt';
    locationIcon.style.position = 'absolute';
    locationIcon.style.right = '10px';
    locationIcon.style.top = '50%';
    locationIcon.style.transform = 'translateY(-50%)';
    locationIcon.style.color = '#333';
    locationIcon.style.cursor = 'pointer';
    locationIcon.title = 'Current Location';
    searchContainer.appendChild(locationIcon);

    // Main navigation options
    const navOptions = [
        { name: 'Home', icon: 'fas fa-home', url: '/eatzzo/templates/blog/home.html' },
        { name: 'Market', icon: 'fas fa-store', url: '/eatzzo/templates/stores/market.html' },
        { name: 'Create', icon: 'fas fa-plus-circle', url: '#', className: 'create-btn' },
        { name: 'Dashboard', icon: 'fas fa-chart-line', url: '/eatzzo/templates/account/dashboard.html' },
        { name: 'Donation', icon: 'fas fa-hand-holding-heart', url: '/eatzzo/templates/donations/donation.html' },
        { name: 'Profile', icon: 'fas fa-user', url: '/eatzzo/templates/account/profile.html' }
    ];

    const navLinksContainer = document.createElement('div');
    navLinksContainer.style.width = '100%';
    navLinksContainer.style.marginBottom = '20px';

    navOptions.forEach(option => {
        const link = document.createElement('a');
        link.href = option.url;
        if (option.className) link.className = option.className;
        link.setAttribute('data-nav-item', option.name);

        const icon = document.createElement('i');
        icon.className = option.icon;
        icon.style.marginRight = '10px';

        link.appendChild(icon);
        link.appendChild(document.createTextNode(option.name));

        link.style.display = 'flex';
        link.style.alignItems = 'center';
        link.style.padding = '15px 30px';
        link.style.color = 'black';
        link.style.textDecoration = 'none';
        link.style.fontSize = '16px';
        link.style.transition = 'all 0.3s';
        link.style.borderLeft = '4px solid transparent';

        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f5f5f5';
            this.style.borderLeft = '4px solid rgb(207, 210, 211)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.borderLeft = '4px solid transparent';
        });

        navLinksContainer.appendChild(link);
    });

    // Bottom navigation options
    const bottomNavOptions = [
        { name: 'Settings', icon: 'fas fa-cog', url: '/eatzzo/templates/account/settings.html' },
        { name: 'Help', icon: 'fas fa-question-circle', url: '/eatzzo/templates/account/help.html' }
    ];

    const bottomNavContainer = document.createElement('div');
    bottomNavContainer.className = 'desktop-bottom-nav';
    bottomNavContainer.style.width = '100%';
    bottomNavContainer.style.marginTop = 'auto';
    bottomNavContainer.style.paddingTop = '20px';
    bottomNavContainer.style.borderTop = '1px solid #eee';

    bottomNavOptions.forEach(option => {
        const link = document.createElement('a');
        link.href = option.url;

        const icon = document.createElement('i');
        icon.className = option.icon;
        icon.style.marginRight = '10px';

        link.appendChild(icon);
        link.appendChild(document.createTextNode(option.name));

        link.style.display = 'flex';
        link.style.alignItems = 'center';
        link.style.padding = '15px 30px';
        link.style.color = 'black';
        link.style.textDecoration = 'none';
        link.style.fontSize = '16px';
        link.style.transition = 'all 0.3s';
        link.style.borderLeft = '4px solid transparent';

        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f5f5f5';
            this.style.borderLeft = '4px solid rgb(207, 210, 211)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.borderLeft = '4px solid transparent';
        });

        bottomNavContainer.appendChild(link);
    });

    // Assemble the navbar
    logoContainer.appendChild(logoImg);
    navbar.appendChild(logoContainer);
    navbar.appendChild(searchContainer);
    navbar.appendChild(navLinksContainer);
    navbar.appendChild(bottomNavContainer);

    // Add to body
    document.body.insertBefore(navbar, document.body.firstChild);

    // Adjust content margin
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';
    mainContent.style.marginLeft = '250px';
    mainContent.style.padding = '20px';

    const existingContent = Array.from(document.body.children).filter(child => child.id !== 'navbar');
    existingContent.forEach(element => {
        mainContent.appendChild(element);
    });

    document.body.appendChild(mainContent);

    // Add Font Awesome
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(fontAwesome);
    }

    // =============================================
    // MOBILE HEADER (TOP SECTION)
    // =============================================

    // Create mobile header (top section with logo, search, location)
    const mobileHeader = document.createElement('div');
    mobileHeader.id = 'mobile-header';
    mobileHeader.style.display = 'none';
    mobileHeader.style.position = 'fixed';
    mobileHeader.style.top = '0';
    mobileHeader.style.left = '0';
    mobileHeader.style.width = '100%';
    mobileHeader.style.backgroundColor = '#fff';
    mobileHeader.style.padding = '10px 15px';
    mobileHeader.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    mobileHeader.style.zIndex = '1000';
    mobileHeader.style.boxSizing = 'border-box';
    mobileHeader.style.display = 'flex';
    mobileHeader.style.alignItems = 'center';
    mobileHeader.style.justifyContent = 'space-between';

    // Mobile logo (smaller version)
    const mobileLogo = document.createElement('img');
    mobileLogo.src = '/eatzzo/static/images/public/logo.png';
    mobileLogo.alt = 'Logo';
    mobileLogo.style.width = '40px';
    mobileLogo.style.height = '40px';
    mobileLogo.style.borderRadius = '50%';
    mobileLogo.style.objectFit = 'cover';

    // Mobile search container
    const mobileSearchContainer = document.createElement('div');
    mobileSearchContainer.style.position = 'relative';
    mobileSearchContainer.style.flex = '1';
    mobileSearchContainer.style.margin = '0 15px';

    const mobileSearchBar = document.createElement('input');
    mobileSearchBar.type = 'search';
    mobileSearchBar.placeholder = 'Search';
    mobileSearchBar.style.width = '100%';
    mobileSearchBar.style.padding = '8px 8px 8px 35px';
    mobileSearchBar.style.borderRadius = '20px';
    mobileSearchBar.style.border = '1px solid #ddd';
    mobileSearchBar.style.outline = 'none';
    mobileSearchBar.style.fontSize = '14px';

    const mobileSearchIcon = document.createElement('i');
    mobileSearchIcon.className = 'fas fa-search';
    mobileSearchIcon.style.position = 'absolute';
    mobileSearchIcon.style.left = '10px';
    mobileSearchIcon.style.top = '50%';
    mobileSearchIcon.style.transform = 'translateY(-50%)';
    mobileSearchIcon.style.color = '#666';
    mobileSearchIcon.style.fontSize = '14px';

    mobileSearchContainer.appendChild(mobileSearchIcon);
    mobileSearchContainer.appendChild(mobileSearchBar);

    // Mobile location icon
    const mobileLocationIcon = document.createElement('i');
    mobileLocationIcon.className = 'fas fa-map-marker-alt';
    mobileLocationIcon.style.fontSize = '20px';
    mobileLocationIcon.style.color = '#333';
    mobileLocationIcon.style.cursor = 'pointer';
    mobileLocationIcon.title = 'Current Location';

    // Add elements to mobile header
    mobileHeader.appendChild(mobileLogo);
    mobileHeader.appendChild(mobileSearchContainer);
    mobileHeader.appendChild(mobileLocationIcon);

    // =============================================
    // MOBILE NAVBAR (BOTTOM NAVIGATION)
    // =============================================

    // Create mobile navbar (bottom navigation)
    const mobileNavbar = document.createElement('div');
    mobileNavbar.id = 'mobile-navbar';
    mobileNavbar.style.display = 'none';
    mobileNavbar.style.position = 'fixed';
    mobileNavbar.style.bottom = '0';
    mobileNavbar.style.left = '0';
    mobileNavbar.style.width = '100%';
    mobileNavbar.style.height = '60px';
    mobileNavbar.style.backgroundColor = '#fff';
    mobileNavbar.style.boxShadow = '0px -2px 5px rgba(0, 0, 0, 0.1)';
    mobileNavbar.style.zIndex = '1000';
    mobileNavbar.style.display = 'flex';
    mobileNavbar.style.justifyContent = 'space-around';
    mobileNavbar.style.alignItems = 'center';

    // Mobile nav options (only icons)
    const mobileNavOptions = [
        { name: 'Home', icon: 'fas fa-home', url: '/eatzzo/templates/blog/home.html' },
        { name: 'Market', icon: 'fas fa-store', url: '/eatzzo/templates/stores/market.html' },
        { name: 'Create', icon: 'fas fa-plus-circle', url: '#', className: 'mobile-create-btn' },
        { name: 'Donation', icon: 'fas fa-hand-holding-heart', url: '/eatzzo/templates/donations/donation.html' },
        { name: 'Profile', icon: 'fas fa-user', url: '/eatzzo/templates/account/profile.html' }
    ];

    mobileNavOptions.forEach(option => {
        const link = document.createElement('a');
        link.href = option.url;
        link.title = option.name;
        if (option.className) link.className = option.className;
        
        const icon = document.createElement('i');
        icon.className = option.icon;
        icon.style.fontSize = '20px';
        
        link.appendChild(icon);
        
        link.style.display = 'flex';
        link.style.alignItems = 'center';
        link.style.justifyContent = 'center';
        link.style.width = '100%';
        link.style.height = '100%';
        link.style.color = 'black';
        link.style.textDecoration = 'none';
        
        mobileNavbar.appendChild(link);
    });

    // Add mobile elements to body
    document.body.appendChild(mobileHeader);
    document.body.appendChild(mobileNavbar);

    // =============================================
    // CREATE POPUP
    // =============================================

    const createPopup = document.createElement('div');
    createPopup.id = 'createPopup';
    createPopup.style.display = 'none';
    createPopup.style.position = 'fixed';
    createPopup.style.top = '0';
    createPopup.style.left = '0';
    createPopup.style.width = '100%';
    createPopup.style.height = '100%';
    createPopup.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    createPopup.style.zIndex = '1001';
    createPopup.style.justifyContent = 'center';
    createPopup.style.alignItems = 'center';

    // Close popup when clicking on empty space
    createPopup.addEventListener('click', function(e) {
        if (e.target === createPopup) {
            closeCreatePopup();
        }
    });

    // Popup content container
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popupContent.style.backgroundColor = '#fff';
    popupContent.style.padding = '20px';
    popupContent.style.borderRadius = '10px';
    popupContent.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    popupContent.style.width = '500px';
    popupContent.style.maxWidth = '90%';
    popupContent.style.maxHeight = '90vh';
    popupContent.style.overflow = 'auto';

    // Stop propagation when clicking inside popup content
    popupContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Popup header
    const popupHeader = document.createElement('div');
    popupHeader.className = 'popup-header';
    popupHeader.style.display = 'flex';
    popupHeader.style.justifyContent = 'space-between';
    popupHeader.style.alignItems = 'center';
    popupHeader.style.marginBottom = '20px';
    popupHeader.style.paddingBottom = '10px';
    popupHeader.style.borderBottom = '1px solid #eee';

    const headerTitle = document.createElement('h3');
    headerTitle.textContent = 'Create New Post';
    headerTitle.style.margin = '0';
    headerTitle.style.color = '#425010';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.id = 'closePopup';
    closeBtn.innerHTML = '&times;';
    closeBtn.style.background = 'none';
    closeBtn.style.border = 'none';
    closeBtn.style.fontSize = '24px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.color = '#425010';
    closeBtn.style.padding = '0';
    closeBtn.style.margin = '0';

    popupHeader.appendChild(headerTitle);
    popupHeader.appendChild(closeBtn);

    // Popup body
    const popupBody = document.createElement('div');
    popupBody.className = 'popup-body';

    // Upload area
    const uploadArea = document.createElement('div');
    uploadArea.className = 'upload-area';
    uploadArea.id = 'uploadArea';
    uploadArea.style.border = '2px dashed #ccc';
    uploadArea.style.borderRadius = '8px';
    uploadArea.style.padding = '40px 20px';
    uploadArea.style.textAlign = 'center';
    uploadArea.style.cursor = 'pointer';
    uploadArea.style.transition = 'all 0.3s';

    const uploadIcon = document.createElement('i');
    uploadIcon.className = 'fas fa-cloud-upload-alt';
    uploadIcon.style.fontSize = '48px';
    uploadIcon.style.marginBottom = '15px';
    uploadIcon.style.color = '#425010';

    const uploadText = document.createElement('p');
    uploadText.textContent = 'Drag photos or videos here or click to browse';
    uploadText.style.margin = '0';
    uploadText.style.color = '#666';

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = 'fileInput';
    fileInput.accept = 'image/*, video/*';
    fileInput.multiple = true;
    fileInput.style.display = 'none';

    uploadArea.appendChild(uploadIcon);
    uploadArea.appendChild(uploadText);
    uploadArea.appendChild(fileInput);

    // Preview area
    const previewArea = document.createElement('div');
    previewArea.className = 'preview-area';
    previewArea.id = 'previewArea';
    previewArea.style.display = 'none';

    const mediaPreview = document.createElement('div');
    mediaPreview.className = 'media-preview';
    mediaPreview.id = 'mediaPreview';
    mediaPreview.style.display = 'flex';
    mediaPreview.style.flexDirection = 'column';
    mediaPreview.style.gap = '15px';
    mediaPreview.style.marginBottom = '20px';

    const captionArea = document.createElement('div');
    captionArea.className = 'caption-area';
    captionArea.style.marginBottom = '20px';

    const postCaption = document.createElement('textarea');
    postCaption.placeholder = 'Write a caption...';
    postCaption.id = 'postCaption';
    postCaption.style.width = '100%';
    postCaption.style.padding = '10px';
    postCaption.style.border = '1px solid #ddd';
    postCaption.style.borderRadius = '5px';
    postCaption.style.minHeight = '100px';
    postCaption.style.resize = 'vertical';

    captionArea.appendChild(postCaption);

    const postOptions = document.createElement('div');
    postOptions.className = 'post-options';
    postOptions.style.marginBottom = '20px';

    const sellLabel = document.createElement('label');
    sellLabel.style.display = 'flex';
    sellLabel.style.alignItems = 'center';
    sellLabel.style.gap = '10px';
    sellLabel.style.marginBottom = '15px';
    sellLabel.style.cursor = 'pointer';
    
    const sellCheckbox = document.createElement('input');
    sellCheckbox.type = 'checkbox';
    sellCheckbox.id = 'sellCheckbox';
    sellCheckbox.style.width = '18px';
    sellCheckbox.style.height = '18px';
    sellCheckbox.style.cursor = 'pointer';
    
    const sellText = document.createElement('span');
    sellText.textContent = 'Mark as sellable';
    sellText.style.color = '#425010';
    
    sellLabel.appendChild(sellCheckbox);
    sellLabel.appendChild(sellText);

    const priceInput = document.createElement('div');
    priceInput.className = 'price-input';
    priceInput.id = 'priceInput';
    priceInput.style.display = 'none';
    priceInput.style.marginTop = '10px';

    const postPrice = document.createElement('input');
    postPrice.type = 'number';
    postPrice.placeholder = 'Price in ₹';
    postPrice.id = 'postPrice';
    postPrice.style.width = '100%';
    postPrice.style.padding = '10px';
    postPrice.style.border = '1px solid #ddd';
    postPrice.style.borderRadius = '5px';

    priceInput.appendChild(postPrice);
    postOptions.appendChild(sellLabel);
    postOptions.appendChild(priceInput);

    previewArea.appendChild(mediaPreview);
    previewArea.appendChild(captionArea);
    previewArea.appendChild(postOptions);

    popupBody.appendChild(uploadArea);
    popupBody.appendChild(previewArea);

    // Popup footer
    const popupFooter = document.createElement('div');
    popupFooter.className = 'popup-footer';
    popupFooter.style.display = 'flex';
    popupFooter.style.justifyContent = 'flex-end';
    popupFooter.style.gap = '10px';
    popupFooter.style.paddingTop = '15px';
    popupFooter.style.borderTop = '1px solid #eee';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-btn';
    cancelBtn.id = 'cancelPost';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.padding = '8px 16px';
    cancelBtn.style.border = '1px solid #ddd';
    cancelBtn.style.borderRadius = '4px';
    cancelBtn.style.background = 'none';
    cancelBtn.style.cursor = 'pointer';
    cancelBtn.style.transition = 'all 0.3s';

    cancelBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f5f5f5';
    });
    
    cancelBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });

    const submitPost = document.createElement('button');
    submitPost.className = 'post-btn';
    submitPost.id = 'submitPost';
    submitPost.textContent = 'Post';
    submitPost.disabled = true;
    submitPost.style.padding = '8px 16px';
    submitPost.style.border = 'none';
    submitPost.style.borderRadius = '4px';
    submitPost.style.background = '#425010';
    submitPost.style.color = 'white';
    submitPost.style.cursor = 'pointer';
    submitPost.style.transition = 'all 0.3s';

    submitPost.addEventListener('mouseenter', function() {
        this.style.opacity = '0.9';
    });
    
    submitPost.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });

    popupFooter.appendChild(cancelBtn);
    popupFooter.appendChild(submitPost);

    // Assemble the popup
    popupContent.appendChild(popupHeader);
    popupContent.appendChild(popupBody);
    popupContent.appendChild(popupFooter);
    createPopup.appendChild(popupContent);

    // Add the popup to the document body
    document.body.appendChild(createPopup);

    // Popup functions
    function closeCreatePopup() {
        createPopup.style.display = 'none';
        resetPopup();
    }

    function resetPopup() {
        previewArea.style.display = 'none';
        uploadArea.style.display = 'block';
        mediaPreview.innerHTML = '';
        postCaption.value = '';
        sellCheckbox.checked = false;
        priceInput.style.display = 'none';
        submitPost.disabled = true;
        fileInput.value = '';
    }

    function handleFileSelect(e) {
        const files = e.target.files;
        if (files.length === 0) return;

        uploadArea.style.display = 'none';
        previewArea.style.display = 'block';
        mediaPreview.innerHTML = '';

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileType = file.type.split('/')[0];

            if (fileType === 'image') {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.style.maxWidth = '100%';
                img.style.borderRadius = '5px';
                mediaPreview.appendChild(img);
            } else if (fileType === 'video') {
                const video = document.createElement('video');
                video.src = URL.createObjectURL(file);
                video.controls = true;
                video.style.maxWidth = '100%';
                video.style.borderRadius = '5px';
                mediaPreview.appendChild(video);
            }
        }

        submitPost.disabled = false;
    }

    // Event listeners for popup
    closeBtn.addEventListener('click', closeCreatePopup);
    cancelBtn.addEventListener('click', closeCreatePopup);

    uploadArea.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);

    sellCheckbox.addEventListener('change', function() {
        priceInput.style.display = this.checked ? 'block' : 'none';
    });

    submitPost.addEventListener('click', function() {
        const caption = postCaption.value;
        const isSellable = sellCheckbox.checked;
        const price = isSellable ? document.getElementById('postPrice').value : null;

        alert('Post created successfully!');
        closeCreatePopup();
    });

    // Drag and drop functionality
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#425010';
        uploadArea.style.backgroundColor = '#f9f9f9';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '#ccc';
        uploadArea.style.backgroundColor = 'transparent';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#ccc';
        uploadArea.style.backgroundColor = 'transparent';

        fileInput.files = e.dataTransfer.files;
        const event = new Event('change');
        fileInput.dispatchEvent(event);
    });

    // =============================================
    // CREATE BUTTON HANDLER (WORKS ACROSS ALL PAGES)
    // =============================================

    // Universal click handler for Create buttons
    document.addEventListener('click', function(e) {
        // Check both desktop and mobile create buttons
        const createBtn = e.target.closest('.create-btn, .mobile-create-btn');
        
        if (createBtn) {
            e.preventDefault();
            createPopup.style.display = 'flex';
        }
    });

    // =============================================
    // RESPONSIVE HANDLER
    // =============================================

    function handleResponsive() {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Mobile view
            navbar.style.display = 'none';
            mobileHeader.style.display = 'flex';
            mobileNavbar.style.display = 'flex';
            mainContent.style.marginLeft = '0';
            mainContent.style.marginTop = '70px'; // Account for mobile header
            mainContent.style.marginBottom = '60px'; // Account for mobile navbar
        } else {
            // Desktop view
            navbar.style.display = 'flex';
            mobileHeader.style.display = 'none';
            mobileNavbar.style.display = 'none';
            mainContent.style.marginLeft = '250px';
            mainContent.style.marginTop = '0';
            mainContent.style.marginBottom = '0';
        }
    }

    // Initial call
    handleResponsive();
    
    // Add resize listener
    window.addEventListener('resize', handleResponsive);

    // =============================================
    // ADDITIONAL STYLES
    // =============================================

    const style = document.createElement('style');
    style.textContent = `
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            transition: margin 0.3s ease;
        }
        
        /* Ensure popup is above everything */
        #createPopup {
            z-index: 1001 !important;
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
            #navbar {
                display: none !important;
            }
            
            #mobile-header {
                display: flex !important;
            }
            
            #mobile-navbar {
                display: flex !important;
            }
            
            .main-content {
                margin-left: 0 !important;
                margin-top: 70px !important;
                margin-bottom: 60px !important;
            }
        }
    `;
    document.head.appendChild(style);
});