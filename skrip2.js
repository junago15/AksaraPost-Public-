// Updated product data from CSV
const products = [
    { id: 21, name: 'Nasi Goreng', price: 10000, category: 'makanan', barcode: '1234567890143', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/Nasgor.webp?w=400&h=400&fit=crop&crop=center', stock: 18 },
    { id: 22, name: 'Nasi Katsu', price: 10000, category: 'makanan', barcode: '1234567890144', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/Ayam%20Katsu.webp?w=400&h=400&fit=crop&crop=center', stock: 15 },
    { id: 23, name: 'Ayam Geprek', price: 10000, category: 'makanan', barcode: '1234567890145', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/Ayam%20Geprek.webp?w=400&h=400&fit=crop&crop=center', stock: 12 },
    { id: 24, name: 'Mie Goreng', price: 10000, category: 'makanan', barcode: '1234567890146', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/mie%20goreng.webp?w=400&h=400&fit=crop&crop=center', stock: 20 },
    { id: 25, name: 'Air Mineral', price: 2000, category: 'minuman', barcode: '1234567890147', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/Air%20mineral.webp?w=400&h=400&fit=crop&crop=center', stock: 50 },
    { id: 26, name: 'Puding', price: 3000, category: 'makanan', barcode: '1234567890148', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/Puding.webp?w=400&h=400&fit=crop&crop=center', stock: 25 },
    { id: 27, name: 'Sosis Bakar', price: 3000, category: 'makanan', barcode: '1234567890149', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/Sosis.webp?w=400&h=400&fit=crop&crop=center', stock: 15 },
    { id: 28, name: 'Es Sinom', price: 3000, category: 'minuman', barcode: '1234567890150', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/Sinom.webp?w=400&h=400&fit=crop&crop=center', stock: 30 },
    { id: 29, name: 'Es Cao Susu', price: 4000, category: 'minuman', barcode: '1234567890151', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/Es%20cao.webp?w=400&h=400&fit=crop&crop=center', stock: 20 },
    { id: 30, name: 'Brownies', price: 3000, category: 'makanan', barcode: '1234567890152', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/brownies.webp?w=400&h=400&fit=crop&crop=center', stock: 18 },
    { id: 31, name: 'Donat', price: 3000, category: 'makanan', barcode: '1234567890153', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/donat.webp?w=400&h=400&fit=crop&crop=center', stock: 22 },
    { id: 32, name: 'Risol Mayo', price: 3500, category: 'makanan', barcode: '1234567890154', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/risol.webp?w=400&h=400&fit=crop&crop=center', stock: 16 },
    { id: 33, name: 'Soes', price: 5000, category: 'makanan', barcode: '1234567890155', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/soes.webp?w=400&h=400&fit=crop&crop=center', stock: 14 },
    { id: 34, name: 'Martabak Tahu', price: 3000, category: 'makanan', barcode: '1234567890156', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/martabak.webp?w=400&h=400&fit=crop&crop=center', stock: 18 },
    { id: 35, name: 'Tahu Isi', price: 2500, category: 'makanan', barcode: '1234567890157', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/tahu%20isi.webp?w=400&h=400&fit=crop&crop=center', stock: 20 },
    { id: 36, name: 'Sosis Solo', price: 3000, category: 'makanan', barcode: '1234567890158', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/sosis%20solo.webp?w=400&h=400&fit=crop&crop=center', stock: 15 },
    { id: 37, name: 'Kertas HVS', price: 1000, category: 'atk', barcode: '1234567890159', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/hvs.webp?w=400&h=400&fit=crop&crop=center', stock: 200 },
    { id: 38, name: 'Buffalo', price: 2000, category: 'atk', barcode: '1234567890160', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/bufalo.webp?w=400&h=400&fit=crop&crop=center', stock: 150 },
    { id: 39, name: 'Folio', price: 10000, category: 'atk', barcode: '1234567890161', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/folio.png?w=400&h=400&fit=crop&crop=center', stock: 100 },
    { id: 40, name: 'Kertas HVS Warna', price: 10000, category: 'atk', barcode: '1234567890162', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/hvs%20warna.png?w=400&h=400&fit=crop&crop=center', stock: 80 },
    { id: 41, name: 'Buku Tulis', price: 5000, category: 'atk', barcode: '1234567890163', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/buku%20tulis.webp?w=400&h=400&fit=crop&crop=center', stock: 120 },
    { id: 42, name: 'Tip-Ex', price: 3000, category: 'atk', barcode: '1234567890164', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/tipex.jpg?w=400&h=400&fit=crop&crop=center', stock: 90 },
    { id: 43, name: 'Rautan', price: 5000, category: 'atk', barcode: '1234567890165', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/rautan.png?w=400&h=400&fit=crop&crop=center', stock: 75 },
    { id: 44, name: 'Penghapus', price: 4000, category: 'atk', barcode: '1234567890166', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/penghapus.png?w=400&h=400&fit=crop&crop=center', stock: 100 },
    { id: 45, name: 'Penggaris', price: 3000, category: 'atk', barcode: '1234567890167', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/penggaris.png?w=400&h=400&fit=crop&crop=center', stock: 80 },
    { id: 46, name: 'Map Kertas', price: 2000, category: 'atk', barcode: '1234567890168', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/map%20kertas.png?w=400&h=400&fit=crop&crop=center', stock: 60 },
    { id: 47, name: 'Map Plastik', price: 1000, category: 'atk', barcode: '1234567890169', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/map%20plastik.png?w=400&h=400&fit=crop&crop=center', stock: 150 },
    { id: 48, name: 'Amplop', price: 5000, category: 'atk', barcode: '1234567890170', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/amplop.jpeg?w=400&h=400&fit=crop&crop=center', stock: 100 },
    { id: 49, name: 'Bulpoin', price: 2000, category: 'atk', barcode: '1234567890172', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/bulpoin.png?w=400&h=400&fit=crop&crop=center', stock: 200 },
    { id: 50, name: 'Pensil 2B', price: 3000, category: 'atk', barcode: '1234567890173', image: 'https://vhurelhciwirynuqpnjt.supabase.co/storage/v1/object/public/aksara/image/pensil.png?w=400&h=400&fit=crop&crop=center', stock: 150 }
];
// Data pesanan online (marketplace)
const onlineOrders = [
    {
        id: 'ONL001',
        date: '2025-08-27 10:30',
        customer: 'Budi Santoso',
        items: [
            { name: 'Pizza Margherita', quantity: 1, price: 35000 },
            { name: 'Es Teh Manis', quantity: 2, price: 5000 }
        ],
        total: 45000,
        status: 'pending',
        platform: 'Tokopedia'
    },
    {
        id: 'ONL002',
        date: '2025-08-27 11:15',
        customer: 'Siti Rahayu',
        items: [
            { name: 'Nasi Goreng Spesial', quantity: 1, price: 20000 },
            { name: 'Jus Jeruk', quantity: 1, price: 12000 }
        ],
        total: 32000,
        status: 'pending',
        platform: 'Shopee'
    },
    {
        id: 'ONL003',
        date: '2025-08-27 09:45',
        customer: 'Ahmad Fauzi',
        items: [
            { name: 'Ayam Bakar', quantity: 2, price: 25000 },
            { name: 'Teh Tarik', quantity: 2, price: 10000 }
        ],
        total: 70000,
        status: 'pending',
        platform: 'GoFood'
    }
];
let cart = [];
let currentCategory = 'all';
let lastTransaction = null;
let transactions = []; // Menyimpan riwayat transaksi

// Function untuk menambahkan denominasi uang
function addDenomination(amount) {
    const cashInput = document.getElementById('cashAmount');
    const currentValue = parseInt(cashInput.value) || 0;
    cashInput.value = currentValue + amount;
    // Trigger input event untuk update tampilan
    const event = new Event('input', { bubbles: true });
    cashInput.dispatchEvent(event);
}

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    try {
        updateTime();
        setInterval(updateTime, 1000);
        renderProducts();
        setupEventListeners();
        updateOnlineOrdersBadge();
        renderOnlineOrders();
    } catch (error) {
        console.error('Error initializing app:', error);
    }
});

function updateTime() {
    try {
        const now = new Date();
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
            timeElement.textContent = now.toLocaleString('id-ID');
        }
    } catch (error) {
        console.error('Error updating time:', error);
    }
}

function renderProducts() {
    try {
        const filteredProducts = currentCategory === 'all'
            ? products
            : products.filter(function (p) { return p.category === currentCategory; });

        renderFilteredProducts(filteredProducts);
    } catch (error) {
        console.error('Error rendering products:', error);
    }
}

function renderFilteredProducts(filteredProducts) {
    const grid = document.getElementById('productsGrid');

    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-8">
                <i class="fas fa-search text-3xl text-gray-400 mb-3"></i>
                <p class="text-gray-600 text-sm">Tidak ada produk ditemukan</p>
                <p class="text-gray-500 text-xs">Coba kata kunci lain atau pilih kategori berbeda</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredProducts.map(product => {
        return `
        <div class="product-card" onclick="addToCartWithAnimation(${product.id}, this)">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image-fixed">
            </div>
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">Rp ${product.price.toLocaleString('id-ID')}</p>
                <p class="product-stock">Stok: ${product.stock}</p>
            </div>
        </div>
        `;
    }).join('');
}

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const icon = document.getElementById('notificationIcon');
    const messageEl = document.getElementById('notificationMessage');
    if (type === 'success') {
        icon.innerHTML = '<i class="fas fa-check-circle text-green-500 text-sm"></i>';
    } else if (type === 'error') {
        icon.innerHTML = '<i class="fas fa-exclamation-circle text-red-500 text-sm"></i>';
    } else {
        icon.innerHTML = '<i class="fas fa-info-circle text-blue-500 text-sm"></i>';
    }
    messageEl.textContent = message;
    // Tampilkan
    notification.classList.remove('hidden');
    notification.classList.add('show');
    // Hilangkan otomatis
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 300);
    }, 3000);
}

function setupEventListeners() {
    // Profile menu toggle
    document.getElementById('profileBtn').addEventListener('click', function (e) {
        e.stopPropagation();
        const menu = document.getElementById('profileMenu');
        menu.classList.toggle('hidden');
    });

    // Online orders menu toggle
    document.getElementById('onlineOrdersBtn').addEventListener('click', function (e) {
        e.stopPropagation();
        const menu = document.getElementById('onlineOrdersMenu');
        menu.classList.remove('hidden');
        menu.classList.add('show');
    });

    // Close notification buttons
    document.getElementById('closeNotificationMobile').addEventListener('click', function (e) {
        e.stopPropagation();
        const menu = document.getElementById('onlineOrdersMenu');
        menu.classList.remove('show');
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 300);
    });

    // Mobile close button
    document.getElementById('mobileCloseButton').addEventListener('click', function (e) {
        e.stopPropagation();
        const menu = document.getElementById('onlineOrdersMenu');
        menu.classList.remove('show');
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 300);
    });

    // Tab switching
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function () {
            const tabId = this.dataset.tab;
            // Remove active class from all tabs
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Add active class to current tab
            this.classList.add('active');
            document.getElementById(tabId + 'Tab').classList.add('active');

            // If history tab, render transaction history
            if (tabId === 'history') {
                renderTransactionHistory();
            }
        });
    });

    // Close menus when clicking outside
    document.addEventListener('click', function (e) {
        const profileMenu = document.getElementById('profileMenu');
        const profileBtn = document.getElementById('profileBtn');
        if (!profileMenu.contains(e.target) && !profileBtn.contains(e.target)) {
            profileMenu.classList.add('hidden');
        }

        const onlineOrdersMenu = document.getElementById('onlineOrdersMenu');
        const onlineOrdersBtn = document.getElementById('onlineOrdersBtn');
        if (!onlineOrdersMenu.contains(e.target) && !onlineOrdersBtn.contains(e.target)) {
            onlineOrdersMenu.classList.remove('show');
            setTimeout(() => {
                onlineOrdersMenu.classList.add('hidden');
            }, 300);
        }

        document.getElementById('searchInfo').classList.add('hidden');
    });

    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            // Reset active states
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('active');
            });

            // Set active state
            this.classList.add('active');
            currentCategory = this.dataset.category;
            document.getElementById('searchProduct').value = ''; // Clear search
            document.getElementById('clearSearch').classList.add('hidden');
            renderProducts();

            // Show category name tooltip on mobile
            if (window.innerWidth <= 768) {
                const tooltip = document.getElementById('categoryTooltipMobile');
                tooltip.textContent = this.dataset.tooltip;
                tooltip.classList.add('show');
                setTimeout(() => {
                    tooltip.classList.remove('show');
                }, 2000);
            }
        });
    });

    // Filter toggle buttons (desktop and mobile)
    document.getElementById('filterToggle').addEventListener('click', function () {
        const categoryFilter = document.getElementById('categoryFilter');
        categoryFilter.classList.toggle('hidden');
        this.classList.toggle('active');
    });

    document.getElementById('filterToggleMobile').addEventListener('click', function () {
        const categoryFilter = document.getElementById('categoryFilter');
        categoryFilter.classList.toggle('hidden');
        this.classList.toggle('active');
    });

    // Search functionality
    document.getElementById('searchProduct').addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase().trim();
        const clearBtn = document.getElementById('clearSearch');
        const searchInfo = document.getElementById('searchInfo');
        const searchResultText = document.getElementById('searchResultText');

        // Show/hide clear button
        if (searchTerm) {
            clearBtn.classList.remove('hidden');
        } else {
            clearBtn.classList.add('hidden');
            searchInfo.classList.add('hidden');
            renderProducts();
            return;
        }

        // Filter products
        let filteredProducts = products.filter(p =>
            p.name.toLowerCase().includes(searchTerm)
        );

        // Apply category filter if not "all"
        if (currentCategory !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === currentCategory);
        }
        
        // Show search results info
        searchInfo.classList.remove('hidden');
        searchResultText.textContent = `Ditemukan ${filteredProducts.length} produk untuk "${this.value}"`;

        // Render filtered products
        renderFilteredProducts(filteredProducts);
    });

    // Clear search button
    document.getElementById('clearSearch').addEventListener('click', function () {
        document.getElementById('searchProduct').value = '';
        this.classList.add('hidden');
        document.getElementById('searchInfo').classList.add('hidden');
        renderProducts();
    });

    // Clear search results button
    document.getElementById('clearSearchResults').addEventListener('click', function (e) {
        e.stopPropagation();
        document.getElementById('searchProduct').value = '';
        document.getElementById('clearSearch').classList.add('hidden');
        document.getElementById('searchInfo').classList.add('hidden');
        renderProducts();
    });

    // Clear cart
    document.getElementById('clearCart').addEventListener('click', function () {
        if (confirm('Yakin ingin mengosongkan keranjang?')) {
            cart = [];
            renderCart();
            showNotification('Keranjang berhasil dikosongkan', 'success');
        }
    });

    // Payment method change
    document.getElementById('paymentMethod').addEventListener('change', function () {
        const cashPayment = document.getElementById('cashPayment');
        const qrisPayment = document.getElementById('qrisPayment');
        if (this.value === 'cash') {
            cashPayment.style.display = 'block';
            qrisPayment.classList.add('hidden');
        } else if (this.value === 'qris') {
            cashPayment.style.display = 'none';
            qrisPayment.classList.remove('hidden');
        }
        updatePaymentButton();
    });

    // File upload handling
    document.getElementById('proofUpload').addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('previewImage').src = e.target.result;
                document.getElementById('fileName').textContent = file.name;
                document.getElementById('uploadPreview').classList.remove('hidden');
                document.getElementById('uploadText').textContent = 'Ganti file';
                updatePaymentButton();
            };
            reader.readAsDataURL(file);
        }
    });

    // Cash amount input
    document.getElementById('cashAmount').addEventListener('input', function () {
        const total = calculateTotal();
        const cashAmount = parseFloat(this.value) || 0;
        const changeDiv = document.getElementById('change');
        if (cashAmount >= total && total > 0) {
            const change = cashAmount - total;
            changeDiv.textContent = `Kembalian: Rp ${change.toLocaleString('id-ID')}`;
            changeDiv.classList.remove('hidden');
        } else {
            changeDiv.classList.add('hidden');
        }
        updatePaymentButton();
    });

    // Process payment
    document.getElementById('processPayment').addEventListener('click', processPayment);

    // Receipt modal
    document.getElementById('closeReceipt').addEventListener('click', function () {
        document.getElementById('receiptModal').classList.add('hidden');
        // Tidak menutup notifikasi ketika nota ditutup
    });

    document.getElementById('printReceipt').addEventListener('click', function () {
        printReceipt();
    });

    document.getElementById('downloadReceipt').addEventListener('click', function () {
        downloadReceiptImage();
    });

    document.getElementById('whatsappReceipt').addEventListener('click', function () {
        shareReceiptToWhatsApp();
    });

    // Search history functionality
    document.getElementById('searchHistory').addEventListener('input', function () {
        renderTransactionHistory(this.value);
    });

    // Pencarian pesanan online
    document.getElementById('searchOrders').addEventListener('input', function () {
        renderOnlineOrders(this.value);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

function addToCartWithAnimation(productId, element) {
    // Add click animation
    element.classList.add('clicked');
    // Remove animation class after animation completes
    setTimeout(() => {
        element.classList.remove('clicked');
    }, 600);

    // Add to cart
    addToCart(productId);

    // Show notification
    const product = products.find(p => p.id === productId);
    if (product) {
        showNotification(`"${product.name}" berhasil ditambahkan ke keranjang!`, 'success');
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            renderCart();
        }
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center text-gray-500 py-6">
                <i class="fas fa-shopping-cart text-2xl mb-2"></i>
                <p class="text-sm">Keranjang masih kosong</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="flex items-center justify-between">
                    <div class="flex-1">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <p class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</p>
                    </div>
                    <div class="flex items-center space-x-1">
                        <button onclick="updateQuantity(${item.id}, -1)" class="bg-red-500 text-white w-5 h-5 rounded text-xs hover:bg-red-600 transition-colors">-</button>
                        <span class="text-xs font-semibold w-6 text-center text-gray-800">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" class="bg-green-500 text-white w-5 h-5 rounded text-xs hover:green-600 transition-colors">+</button>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-2">
                    <span class="text-xs text-gray-600">Subtotal</span>
                    <span class="text-xs font-semibold text-gray-800">Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</span>
                </div>
            </div>
        `).join('');
    }

    updateTotals();
    updatePaymentButton();
}

function updateTotals() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('total').textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function updatePaymentButton() {
    const paymentBtn = document.getElementById('processPayment');
    const paymentMethod = document.getElementById('paymentMethod').value;
    const total = calculateTotal();

    if (cart.length === 0) {
        paymentBtn.disabled = true;
        return;
    }

    if (paymentMethod === 'cash') {
        const cashAmount = parseFloat(document.getElementById('cashAmount').value) || 0;
        paymentBtn.disabled = cashAmount < total;
    } else if (paymentMethod === 'qris') {
        const hasProof = document.getElementById('proofUpload').files.length > 0;
        paymentBtn.disabled = !hasProof;
    } else {
        paymentBtn.disabled = false;
    }
}

function processPayment() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const total = calculateTotal();
    const now = new Date();
    const cashAmount = parseFloat(document.getElementById('cashAmount').value) || 0;
    const change = cashAmount - total;

    // Save transaction data
    lastTransaction = {
        items: [...cart],
        total: total,
        paymentMethod: paymentMethod,
        cashAmount: cashAmount,
        change: change,
        receiptNumber: 'TRX' + now.getTime().toString().slice(-8),
        date: now
    };

    // Add to transaction history
    transactions.push(lastTransaction);

    // Generate receipt
    generateReceipt(paymentMethod, total);

    // Show receipt modal
    document.getElementById('receiptModal').classList.remove('hidden');
    document.getElementById('receiptModal').classList.add('flex');

    // Clear cart
    cart = [];
    renderCart();

    // Reset payment form
    document.getElementById('cashAmount').value = '';
    document.getElementById('change').classList.add('hidden');
    document.getElementById('proofUpload').value = '';
    document.getElementById('uploadPreview').classList.add('hidden');
    document.getElementById('uploadText').textContent = 'Pilih file gambar';

    showNotification('Pembayaran berhasil diproses!', 'success');
}

function generateReceipt(paymentMethod, total) {
    const now = new Date();
    const receiptNumber = 'TRX' + now.getTime().toString().slice(-8);
    const cashAmount = parseFloat(document.getElementById('cashAmount').value) || 0;
    const change = cashAmount - total;

    const receiptContent = document.getElementById('receiptContent');
    receiptContent.innerHTML = `
        <div class="text-center mb-3">
            <h4 class="font-bold text-md">AKSARA-MART</h4>
            <p class="text-xs">Jalan Keputih Tegal No 54, Surabaya</p>
            <p class="text-xs">Telp: 0888-1343-038</p>
        </div>
        <div class="border-t border-b border-dashed py-2 mb-2">
            <div class="flex justify-between text-xs">
                <span>No. Transaksi:</span>
                <span>${receiptNumber}</span>
            </div>
            <div class="flex justify-between text-xs">
                <span>Tanggal:</span>
                <span>${now.toLocaleString('id-ID')}</span>
            </div>
            <div class="flex justify-between text-xs">
                <span>Kasir:</span>
                <span>Admin</span>
            </div>
        </div>
        <div class="space-y-1 mb-2">
            ${cart.map(item => `
                <div class="flex justify-between text-xs">
                    <div class="flex-1">
                        <div>${item.name}</div>
                        <div class="text-gray-500">${item.quantity} x Rp ${item.price.toLocaleString('id-ID')}</div>
                    </div>
                    <div>Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</div>
                </div>
            `).join('')}
        </div>
        <div class="border-t border-dashed pt-2">
            <div class="flex justify-between font-bold text-sm">
                <span>Total:</span>
                <span>Rp ${total.toLocaleString('id-ID')}</span>
            </div>
            <div class="flex justify-between text-xs mt-1">
                <span>Pembayaran:</span>
                <span>${paymentMethod === 'cash' ? 'Tunai' : 'QRIS'}</span>
            </div>
            ${paymentMethod === 'cash' ? `
            <div class="flex justify-between text-xs mt-1">
                <span>Bayar:</span>
                <span>Rp ${cashAmount.toLocaleString('id-ID')}</span>
            </div>
            <div class="flex justify-between text-xs mt-1">
                <span>Kembalian:</span>
                <span>Rp ${change.toLocaleString('id-ID')}</span>
            </div>
            ` : ''}
        </div>
        <div class="text-center mt-3 text-xs">
            <p>Terima kasih sudah belanja <br> di Aksara-Mart 🙏😊.</p>
        </div>
    `;
}

function printReceipt() {
    // Create a print-friendly version of the receipt
    const printContent = document.getElementById('receiptContent').innerHTML;

    // Create a print window with thermal printer styles
    const printWindow = window.open('', '_blank', 'width=300,height=600');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cetak Struk</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                @media print {
                    body {
                        font-family: 'Courier New', monospace;
                        font-size: 12px;
                        width: 80mm;
                        margin: 0;
                        padding: 5px;
                        color: black;
                        background: white;
                    }
                    .text-center { text-align: center; }
                    .font-bold { font-weight: bold; }
                    .text-xs { font-size: 11px; }
                    .text-sm { font-size: 12px; }
                    .text-md { font-size: 14px; }
                    .flex { display: flex; }
                    .justify-between { justify-content: space-between; }
                    .flex-1 { flex: 1; }
                    .mb-2 { margin-bottom: 0.5rem; }
                    .mb-3 { margin-bottom: 0.75rem; }
                    .mt-1 { margin-top: 0.25rem; }
                    .mt-3 { margin-top: 0.75rem; }
                    .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
                    .border-t { border-top: 1px solid #000; }
                    .border-b { border-bottom: 1px solid #000; }
                    .border-dashed { border-style: dashed; }
                    .space-y-1 > * + * { margin-top: 0.25rem; }
                    .space-y-1 > * + * { margin-top: 0.25rem; }
                    
                    /* Sembunyikan tombol cetak saat mencetak */
                    .no-print {
                        display: none;
                    }
                }
                
                /* Tampilan normal (bukan saat cetak) */
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                }
                .print-button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    margin: 10px 0;
                }
            </style>
        </head>
        <body>
            <button class="print-button no-print" onclick="window.print()">Cetak Struk</button>
            ${printContent}
            <script>
                // Auto-print when window loads
                window.onload = function() {
                    window.print();
                    setTimeout(function() {
                        window.close();
                    }, 500);
                };
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

function downloadReceiptImage() {
    // Simpan elemen asli
    const originalRececept = document.getElementById('receiptContent');

    // Simpan style asli
    const originalMaxHeight = originalRececept.style.maxHeight;
    const originalOverflow = originalRececept.style.overflow;

    // Hapus batasan tinggi dan overflow untuk rendering
    originalRececept.style.maxHeight = 'none';
    originalRececept.style.overflow = 'visible';

    // Render dengan html2canvas
    html2canvas(originalRececept, {
        scale: 2,
        width: originalRececept.scrollWidth,
        height: originalRececept.scrollHeight,
        windowWidth: originalRececept.scrollWidth,
        windowHeight: originalRececept.scrollHeight,
        useCORS: true,
        backgroundColor: '#ffffff'
    }).then(canvas => {
        // Kembalikan style asli
        originalRececept.style.maxHeight = originalMaxHeight;
        originalRececept.style.overflow = originalOverflow;

        // Buat link download
        const link = document.createElement('a');
        link.download = 'struk-pembelian-' + new Date().getTime() + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(error => {
        console.error('Error generating receipt image:', error);
        // Kembalikan style asli jika terjadi error
        originalRececept.style.maxHeight = originalMaxHeight;
        originalRececept.style.overflow = originalOverflow;
    });
}

function shareReceiptToWhatsApp() {
    // Pesan WhatsApp yang diinginkan
    const message = "Terima kasih sudah berbelanja di Aksara-Mart. 🙏😊";
    const encodedMessage = encodeURIComponent(message);

    // Buka WhatsApp dengan pesan yang telah ditentukan
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
}

// Fungsi untuk notifikasi pesanan online
function updateOnlineOrdersBadge() {
    const badge = document.getElementById('onlineOrdersBadge');
    const pendingOrders = onlineOrders.filter(order => order.status === 'pending').length;
    if (pendingOrders > 0) {
        badge.textContent = pendingOrders;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

// Fungsi untuk merender pesanan online dengan filter
function renderOnlineOrders(searchTerm = '') {
    const ordersList = document.getElementById('onlineOrdersList');

    // Filter pesanan berdasarkan kata kunci pencarian
    let filteredOrders = [...onlineOrders];
    if (searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        filteredOrders = onlineOrders.filter(order =>
            order.id.toLowerCase().includes(searchTermLower) ||
            order.customer.toLowerCase().includes(searchTermLower) ||
            order.platform.toLowerCase().includes(searchTermLower) ||
            order.items.some(item => item.name.toLowerCase().includes(searchTermLower))
        );
    }

    if (filteredOrders.length === 0) {
        ordersList.innerHTML = `
            <div class="no-orders-message">
                <i class="fas fa-search text-xl mb-2"></i>
                <p>Tidak ada pesanan online</p>
                ${searchTerm ? `<p class="text-xs mt-1">Untuk pencarian "${searchTerm}"</p>` : ''}
            </div>
        `;
        return;
    }

    ordersList.innerHTML = filteredOrders.map(order => `
        <div class="order-item" data-order-id="${order.id}">
            <div class="flex justify-between items-start">
                <div class="flex-1">
                    <div class="order-number">${order.id} • ${order.platform} 
                        <span class="order-status ${order.status === 'pending' ? 'status-pending' : 'status-processed'}">
                            ${order.status === 'pending' ? 'Pending' : 'Selesai'}
                        </span>
                    </div>
                    <div class="order-date">${order.date}</div>
                    <div class="order-items">
                        ${order.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
                    </div>
                    <div class="font-semibold text-sm mt-1">Total: Rp ${order.total.toLocaleString('id-ID')}</div>
                    <div class="text-xs text-gray-600 mt-1">Pelanggan: ${order.customer}</div>
                </div>
            </div>
            ${order.status === 'pending' ? `
            <button class="process-order-btn" onclick="event.stopPropagation(); processOnlineOrder('${order.id}')">
                Proses Pesanan
            </button>
            ` : `
            <button class="process-order-btn" onclick="event.stopPropagation(); viewOnlineOrderReceipt('${order.id}')" style="background-color: #6B7280;">
                Lihat Nota
            </button>
            `}
        </div>
    `).join('');
}

function processOnlineOrder(orderId) {
    const order = onlineOrders.find(o => o.id === orderId);
    if (!order) return;

    // Ubah status pesanan menjadi diproses
    order.status = 'processed';

    // Generate struk untuk pesanan online
    generateOnlineOrderReceipt(order);

    // Tampilkan modal struk
    document.getElementById('receiptModal').classList.remove('hidden');
    document.getElementById('receiptModal').classList.add('flex');

    // Perbarui tampilan daftar pesanan
    renderOnlineOrders();
    updateOnlineOrdersBadge();

    // Tampilkan notifikasi
    showNotification(`Pesanan ${orderId} berhasil diproses!`, 'success');
}

function viewOnlineOrderReceipt(orderId) {
    const order = onlineOrders.find(o => o.id === orderId);
    if (!order) return;

    // Generate struk untuk pesanan online
    generateOnlineOrderReceipt(order);

    // Tampilkan modal struk
    document.getElementById('receiptModal').classList.remove('hidden');
    document.getElementById('receiptModal').classList.add('flex');
}

function generateOnlineOrderReceipt(order) {
    const now = new Date();
    const receiptContent = document.getElementById('receiptContent');
    receiptContent.innerHTML = `
        <div class="text-center mb-3">
            <h4 class="font-bold text-md">AKSARA-MART</h4>
            <p class="text-xs">Jalan Keputih Tegal No 54, Surabaya</p>
            <p class="text-xs">Telp: 0888-1343-038</p>
        </div>
        <div class="border-t border-b border-dashed py-2 mb-2">
            <div class="flex justify-between text-xs">
                <span>No. Pesanan:</span>
                <span>${order.id}</span>
            </div>
            <div class="flex justify-between text-xs">
                <span>Platform:</span>
                <span>${order.platform}</span>
            </div>
            <div class="flex justify-between text-xs">
                <span>Tanggal:</span>
                <span>${now.toLocaleString('id-ID')}</span>
            </div>
            <div class="flex justify-between text-xs">
                <span>Kasir:</span>
                <span>Admin</span>
            </div>
        </div>
        <div class="space-y-1 mb-2">
            ${order.items.map(item => `
                <div class="flex justify-between text-xs">
                    <div class="flex-1">
                        <div>${item.name}</div>
                        <div class="text-gray-500">${item.quantity} x Rp ${item.price.toLocaleString('id-ID')}</div>
                    </div>
                    <div>Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</div>
                </div>
            `).join('')}
        </div>
        <div class="border-t border-dashed pt-2">
            <div class="flex justify-between font-bold text-sm">
                <span>Total:</span>
                <span>Rp ${order.total.toLocaleString('id-ID')}</span>
            </div>
            <div class="flex justify-between text-xs mt-1">
                <span>Metode:</span>
                <span>Online (${order.platform})</span>
            </div>
            <div class="flex justify-between text-xs mt-1">
                <span>Pelanggan:</span>
                <span>${order.customer}</span>
            </div>
        </div>
        <div class="text-center mt-3 text-xs">
            <p>Terima kasih sudah berbelanja <br> di Aksara-Mart 🙏😊.</p>
        </div>
    `;
}

// Fungsi untuk merender riwayat transaksi
function renderTransactionHistory(searchTerm = '') {
    const historyList = document.getElementById('transactionHistoryList');
    let filteredTransactions = transactions;

    if (searchTerm) {
        filteredTransactions = transactions.filter(transaction =>
            transaction.receiptNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            transaction.date.toLocaleString('id-ID').toLowerCase().includes(searchTerm.toLowerCase()) ||
            transaction.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }

    if (filteredTransactions.length === 0) {
        historyList.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <i class="fas fa-receipt text-3xl mb-3"></i>
                <p class="text-sm">Tidak ada riwayat transaksi</p>
                ${searchTerm ? `<p class="text-xs">Untuk pencarian "${searchTerm}"</p>` : ''}
            </div>
        `;
        return;
    }

    historyList.innerHTML = filteredTransactions.map(transaction => `
        <div class="transaction-history-item" onclick="event.stopPropagation(); viewTransactionReceipt('${transaction.receiptNumber}')">
            <div class="flex justify-between items-start">
                <div class="flex-1">
                    <div class="font-semibold text-sm">${transaction.receiptNumber}</div>
                    <div class="text-xs text-gray-600">${transaction.date.toLocaleString('id-ID')}</div>
                    <div class="text-xs mt-1">
                        ${transaction.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
                    </div>
                </div>
                <div class="text-right">
                    <div class="font-bold text-sm">Rp ${transaction.total.toLocaleString('id-ID')}</div>
                    <div class="text-xs text-gray-600">${transaction.paymentMethod === 'cash' ? 'Tunai' : 'QRIS'}</div>
                </div>
            </div>
            <button class="process-order-btn" onclick="event.stopPropagation(); viewTransactionReceipt('${transaction.receiptNumber}')" style="background-color: #3B82F6;">
                Lihat Nota
            </button>
        </div>
    `).join('');
}

function viewTransactionReceipt(receiptNumber) {
    const transaction = transactions.find(t => t.receiptNumber === receiptNumber);
    if (!transaction) return;

    const receiptContent = document.getElementById('receiptContent');
    receiptContent.innerHTML = `
        <div class="text-center mb-3">
            <h4 class="font-bold text-md">AKSARA-MART</h4>
            <p class="text-xs">Jalan Keputih Tegal No 54, Surabaya</p>
            <p class="text-xs">Telp: 0888-1343-038</p>
        </div>
        <div class="border-t border-b border-dashed py-2 mb-2">
            <div class="flex justify-between text-xs">
                <span>No. Transaksi:</span>
                <span>${transaction.receiptNumber}</span>
            </div>
            <div class="flex justify-between text-xs">
                <span>Tanggal:</span>
                <span>${transaction.date.toLocaleString('id-ID')}</span>
            </div>
            <div class="flex justify-between text-xs">
                <span>Kasir:</span>
                <span>Admin</span>
            </div>
        </div>
        <div class="space-y-1 mb-2">
            ${transaction.items.map(item => `
                <div class="flex justify-between text-xs">
                    <div class="flex-1">
                        <div>${item.name}</div>
                        <div class="text-gray-500">${item.quantity} x Rp ${item.price.toLocaleString('id-ID')}</div>
                    </div>
                    <div>Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</div>
                </div>
            `).join('')}
        </div>
        <div class="border-t border-dashed pt-2">
            <div class="flex justify-between font-bold text-sm">
                <span>Total:</span>
                <span>Rp ${transaction.total.toLocaleString('id-ID')}</span>
            </div>
            <div class="flex justify-between text-xs mt-1">
                <span>Pembayaran:</span>
                <span>${transaction.paymentMethod === 'cash' ? 'Tunai' : 'QRIS'}</span>
            </div>
            ${transaction.paymentMethod === 'cash' ? `
            <div class="flex justify-between text-xs mt-1">
                <span>Bayar:</span>
                <span>Rp ${transaction.cashAmount.toLocaleString('id-ID')}</span>
            </div>
            <div class="flex justify-between text-xs mt-1">
                <span>Kembalian:</span>
                <span>Rp ${transaction.change.toLocaleString('id-ID')}</span>
            </div>
            ` : ''}
        </div>
        <div class="text-center mt-3 text-xs">
            <p>Terima kasih sudah belanja <br> di Aksara-Mart 🙏😊.</p>
        </div>
    `;

    // Tampilkan modal struk
    document.getElementById('receiptModal').classList.remove('hidden');
    document.getElementById('receiptModal').classList.add('flex');
}