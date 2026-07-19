(function() {
  'use strict';

  /* ================ Dummy Data ================ */
  var manufacturers = [
    { id: 'm-001', name: 'Sun Pharmaceutical Industries' },
    { id: 'm-002', name: 'Cipla Ltd' },
    { id: 'm-003', name: "Dr. Reddy's Laboratories" },
    { id: 'm-004', name: 'Novartis AG' },
    { id: 'm-005', name: 'Pfizer Inc' },
    { id: 'm-006', name: 'Dabur Nepal' }
  ];
  var categories = [
    { id: 'cat-001', name: 'Antibiotics' }, { id: 'cat-002', name: 'Analgesics' },
    { id: 'cat-003', name: 'Antipyretics' }, { id: 'cat-004', name: 'Antihistamines' },
    { id: 'cat-005', name: 'Antacids' }, { id: 'cat-006', name: 'Antihypertensives' },
    { id: 'cat-007', name: 'Antidiabetics' }, { id: 'cat-008', name: 'Vitamins & Supplements' }
  ];

  var products = [
    { id: 'p-001', name: 'Amoxicillin 500mg', genericName: 'Amoxicillin Trihydrate', category: 'Antibiotics', manufacturer: 'Sun Pharmaceutical Industries', price: 120, stock: 450, reorderLevel: 100, rack: 'A-01', rx: false, unit: 'Capsule', packSize: '100s', purchasePrice: 85, isActive: true },
    { id: 'p-002', name: 'Augmentin 625mg', genericName: 'Amoxicillin + Clavulanic Acid', category: 'Antibiotics', manufacturer: 'Sun Pharmaceutical Industries', price: 650, stock: 200, reorderLevel: 50, rack: 'A-02', rx: true, unit: 'Tablet', packSize: '100s', purchasePrice: 450, isActive: true },
    { id: 'p-003', name: 'Ciprofloxacin 500mg', genericName: 'Ciprofloxacin HCl', category: 'Antibiotics', manufacturer: 'Cipla Ltd', price: 180, stock: 35, reorderLevel: 75, rack: 'A-03', rx: true, unit: 'Tablet', packSize: '100s', purchasePrice: 120, isActive: true },
    { id: 'p-004', name: 'Paracetamol 500mg', genericName: 'Paracetamol', category: 'Analgesics', manufacturer: 'Novartis AG', price: 70, stock: 2500, reorderLevel: 500, rack: 'B-01', rx: false, unit: 'Tablet', packSize: '500s', purchasePrice: 45, isActive: true },
    { id: 'p-005', name: 'Ibuprofen 400mg', genericName: 'Ibuprofen', category: 'Analgesics', manufacturer: 'Pfizer Inc', price: 95, stock: 800, reorderLevel: 200, rack: 'B-02', rx: false, unit: 'Tablet', packSize: '200s', purchasePrice: 60, isActive: true },
    { id: 'p-006', name: 'Omeprazole 20mg', genericName: 'Omeprazole', category: 'Antacids', manufacturer: 'Sun Pharmaceutical Industries', price: 140, stock: 420, reorderLevel: 100, rack: 'C-01', rx: false, unit: 'Capsule', packSize: '100s', purchasePrice: 90, isActive: true },
    { id: 'p-007', name: 'Amlodipine 5mg', genericName: 'Amlodipine Besylate', category: 'Antihypertensives', manufacturer: 'Novartis AG', price: 85, stock: 700, reorderLevel: 200, rack: 'D-01', rx: false, unit: 'Tablet', packSize: '100s', purchasePrice: 55, isActive: true },
    { id: 'p-008', name: 'Metformin 500mg', genericName: 'Metformin HCl', category: 'Antidiabetics', manufacturer: 'Cipla Ltd', price: 70, stock: 90, reorderLevel: 200, rack: 'E-01', rx: false, unit: 'Tablet', packSize: '100s', purchasePrice: 45, isActive: true },
    { id: 'p-009', name: 'Cetirizine 10mg', genericName: 'Cetirizine HCl', category: 'Antihistamines', manufacturer: 'Dabur Nepal', price: 35, stock: 1200, reorderLevel: 300, rack: 'F-01', rx: false, unit: 'Tablet', packSize: '100s', purchasePrice: 20, isActive: true },
    { id: 'p-010', name: 'Vitamin C 500mg', genericName: 'Ascorbic Acid', category: 'Vitamins & Supplements', manufacturer: 'Dabur Nepal', price: 100, stock: 600, reorderLevel: 150, rack: 'G-01', rx: false, unit: 'Tablet', packSize: '100s', purchasePrice: 65, isActive: true },
    { id: 'p-011', name: 'Montelukast 10mg', genericName: 'Montelukast Sodium', category: 'Antihistamines', manufacturer: 'Dabur Nepal', price: 240, stock: 200, reorderLevel: 50, rack: 'F-03', rx: false, unit: 'Tablet', packSize: '50s', purchasePrice: 160, isActive: true },
    { id: 'p-012', name: 'Losartan 50mg', genericName: 'Losartan Potassium', category: 'Antihypertensives', manufacturer: 'Pfizer Inc', price: 170, stock: 350, reorderLevel: 100, rack: 'D-02', rx: false, unit: 'Tablet', packSize: '100s', purchasePrice: 110, isActive: true }
  ];

  var customers = [
    { id: 'c-001', firstName: 'Ram', lastName: 'Sharma', email: 'ram.sharma@email.com', phone: '9812345678', address: 'Kathmandu, Nepal', isActive: true },
    { id: 'c-002', firstName: 'Sita', lastName: 'Poudel', email: 'sita.poudel@email.com', phone: '9823456789', address: 'Lalitpur, Nepal', isActive: true },
    { id: 'c-003', firstName: 'Hari', lastName: 'Thapa', email: 'hari.thapa@email.com', phone: '9834567890', address: 'Bhaktapur, Nepal', isActive: true },
    { id: 'c-004', firstName: 'Gita', lastName: 'Acharya', email: 'gita.acharya@email.com', phone: '9845678901', address: 'Kathmandu, Nepal', isActive: true },
    { id: 'c-005', firstName: 'Krishna', lastName: 'Neupane', email: 'krishna.neupane@email.com', phone: '9856789012', address: 'Pokhara, Nepal', isActive: true },
    { id: 'c-006', firstName: 'Laxmi', lastName: 'Gurung', email: 'laxmi.gurung@email.com', phone: '9867890123', address: 'Chitwan, Nepal', isActive: true }
  ];

  var suppliers = [
    { id: 'sup-001', name: 'Nepal Pharma Distributors', contactPerson: 'Ram Thapa', email: 'info@nepharma.com', phone: '9811111111', address: 'Kathmandu', isActive: true },
    { id: 'sup-002', name: 'Kathmandu Medical Hall', contactPerson: 'Sita Gurung', email: 'info@ktmmed.com', phone: '9822222222', address: 'Kathmandu', isActive: true },
    { id: 'sup-003', name: 'Himalaya Drug Traders', contactPerson: 'Hari Poudel', email: 'info@himalayadrug.com', phone: '9833333333', address: 'Lalitpur', isActive: true },
    { id: 'sup-004', name: 'Birat Medical Store', contactPerson: 'Gita Sharma', email: 'info@biratmed.com', phone: '9844444444', address: 'Biratnagar', isActive: true }
  ];

  var sales = [];
  var purchaseOrders = [];
  var prescriptions = [];
  var stockMovements = [];

  function initSales() {
    if (sales.length) return;
    for (var d = 0; d < 30; d++) {
      var date = new Date(2026, 6, 19 - d);
      var dayCount = Math.floor(Math.random() * 8) + 5;
      for (var i = 0; i < dayCount; i++) {
        var cust = customers[Math.floor(Math.random() * customers.length)];
        var itemCount = Math.floor(Math.random() * 4) + 1;
        var items = []; var sub = 0;
        for (var j = 0; j < itemCount; j++) {
          var prod = products[Math.floor(Math.random() * products.length)];
          var qty = Math.floor(Math.random() * 5) + 1;
          var total = prod.price * qty;
          sub += total;
          items.push({ productId: prod.id, productName: prod.name, quantity: qty, unitPrice: prod.price, total: total });
        }
        var tax = Math.round(sub * 0.13);
        var disc = Math.random() > 0.7 ? Math.floor(Math.random() * 200) : 0;
        sales.push({
          id: 's-' + sales.length.toString().padStart(4, '0'),
          receiptNumber: 'INV-2026-' + (sales.length + 1).toString().padStart(4, '0'),
          saleDate: date.toISOString(), status: 'Completed',
          customerName: cust.firstName + ' ' + cust.lastName, customerId: cust.id,
          subTotal: sub, taxAmount: tax, discountAmount: disc, totalAmount: sub + tax - disc,
          amountPaid: sub + tax - disc, paymentMethod: ['Cash', 'Card', 'Mobile Banking'][Math.floor(Math.random() * 3)],
          items: items
        });
      }
    }
  }

  function initPOs() {
    if (purchaseOrders.length) return;
    for (var i = 0; i < 12; i++) {
      var date = new Date(2026, 6, 19 - Math.floor(i / 2));
      var supp = suppliers[Math.floor(Math.random() * suppliers.length)];
      var items = []; var total = 0;
      for (var j = 0; j < Math.floor(Math.random() * 4) + 1; j++) {
        var prod = products[Math.floor(Math.random() * products.length)];
        var qty = Math.floor(Math.random() * 90) + 10;
        total += prod.purchasePrice * qty;
        items.push({ productId: prod.id, productName: prod.name, quantity: qty, unitPrice: prod.purchasePrice, total: prod.purchasePrice * qty });
      }
      purchaseOrders.push({
        id: 'po-' + (i + 1).toString().padStart(3, '0'), orderNumber: 'PO-2026-' + (i + 1).toString().padStart(4, '0'),
        status: ['Pending', 'Submitted', 'PartiallyReceived', 'Completed'][Math.floor(Math.random() * 4)],
        orderDate: date.toISOString(), supplierName: supp.name, supplierId: supp.id,
        totalAmount: Math.round(total * 1.13), items: items
      });
    }
  }

  function initPrescriptions() {
    if (prescriptions.length) return;
    for (var i = 0; i < 10; i++) {
      var cust = customers[Math.floor(Math.random() * customers.length)];
      var prod = products[Math.floor(Math.random() * products.length)];
      prescriptions.push({
        id: 'rx-' + (i + 1).toString().padStart(3, '0'), prescriptionReference: 'RX-2026-' + (i + 1).toString().padStart(4, '0'),
        prescriptionDate: new Date(2026, 6, 19 - i).toISOString(),
        prescriberName: ['Dr. Sharma', 'Dr. KC', 'Dr. Thapa', 'Dr. Poudel'][Math.floor(Math.random() * 4)],
        customerName: cust.firstName + ' ' + cust.lastName, customerId: cust.id,
        dispensingStatus: ['Pending', 'Dispensed', 'PartiallyDispensed'][Math.floor(Math.random() * 3)],
        items: [{ productId: prod.id, productName: prod.name, dosage: '1+1+1', duration: '7 days', quantity: Math.floor(Math.random() * 20) + 10 }]
      });
    }
  }

  function initMovements() {
    if (stockMovements.length) return;
    for (var i = 0; i < 20; i++) {
      var prod = products[Math.floor(Math.random() * products.length)];
      var qty = Math.floor(Math.random() * 100) + 1;
      var before = Math.floor(Math.random() * 400) + 50;
      stockMovements.push({
        id: 'mov-' + (i + 1).toString().padStart(3, '0'),
        movementType: ['StockIn', 'StockOut', 'Adjustment', 'Return'][Math.floor(Math.random() * 4)],
        quantityChange: qty, quantityBefore: before, quantityAfter: before + qty,
        unitPrice: prod.price, productName: prod.name,
        referenceNumber: 'REF-' + (i + 1).toString().padStart(4, '0'),
        createdAtUtc: new Date(2026, 6, 19 - Math.floor(i / 3), Math.floor(Math.random() * 9) + 8, Math.floor(Math.random() * 60)).toISOString()
      });
    }
  }

  function uid(pref) { return pref + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6); }
  function fmtCurrency(n) { return 'Rs ' + Number(n).toLocaleString(); }

  /* ================ Submenu Toggle ================ */
  function toggleSubmenu(el) {
    var sub = el.nextElementSibling;
    if (sub && sub.classList.contains('submenu-items')) {
      sub.classList.toggle('open');
      var arrow = el.querySelector('.arrow-right');
      if (arrow) arrow.classList.toggle('open');
    }
  }

  /* ================ Router ================ */
  var currentPage = 'dashboard';
  var currentSubpage = null;

  function setActiveNav(page) {
    document.querySelectorAll('.nav-item').forEach(function(el) {
      el.classList.toggle('active', el.dataset.page === page);
    });
  }

  function navigateTo(page, subpage) {
    currentPage = page;
    currentSubpage = subpage || null;
    setActiveNav(page);
    var area = document.getElementById('content-area');

    if (page === 'reports' && subpage) {
      renderReportSubpage(area, subpage);
    } else if (page === 'settings' && subpage) {
      renderSettingsSubpage(area, subpage);
    } else {
      switch (page) {
        case 'dashboard': renderDashboard(area); break;
        case 'inventory': renderInventory(area); break;
        case 'products': renderProducts(area); break;
        case 'transactions': renderStockMovements(area); break;
        case 'pos': renderPOS(area); break;
        case 'sales': renderSales(area); break;
        case 'purchase-orders': renderPurchaseOrders(area); break;
        case 'suppliers': renderSuppliers(area); break;
        case 'customers': renderCustomers(area); break;
        case 'prescriptions': renderPrescriptions(area); break;
        case 'returns': renderReturns(area); break;
        case 'audit-logs': renderAuditLogs(area); break;
        default: renderDashboard(area);
      }
    }
  }

  /* ================ Dashboard ================ */
  function renderDashboard(area) {
    initSales();
    var today = '2026-07-19';
    var todaySales = sales.filter(function(s) { return s.saleDate.indexOf(today) >= 0; });
    var ts = todaySales.reduce(function(s, i) { return s + i.totalAmount; }, 0);
    var tt = todaySales.length;
    var lowStock = products.filter(function(p) { return p.stock < p.reorderLevel * 2; });

    area.innerHTML =
      '<h1 style="font-size:24px;font-weight:500;margin-bottom:8px">Dashboard</h1>' +
      '<div class="stats-grid">' +
        '<div class="mat-card stat-card"><span class="material-icons stat-icon blue">medication</span><div class="stat-value">' + products.length + '</div><p class="stat-label">Total Products</p></div>' +
        '<div class="mat-card stat-card clickable"><span class="material-icons stat-icon orange">inventory_2</span><div class="stat-value warn">' + lowStock.length + '</div><p class="stat-label">Low Stock Items</p></div>' +
        '<div class="mat-card stat-card"><span class="material-icons stat-icon green">shopping_cart</span><div class="stat-value">' + fmtCurrency(ts) + '</div><p class="stat-label">Today\'s Sales</p></div>' +
        '<div class="mat-card stat-card clickable"><span class="material-icons stat-icon red">warning</span><div class="stat-value warn">7</div><p class="stat-label">Expiring Soon</p></div>' +
        '<div class="mat-card stat-card"><span class="material-icons stat-icon purple">receipt</span><div class="stat-value">' + tt + '</div><p class="stat-label">Today\'s Transactions</p></div>' +
        '<div class="mat-card stat-card clickable"><span class="material-icons stat-icon brown">dangerous</span><div class="stat-value danger">2</div><p class="stat-label">Expired Items</p></div>' +
      '</div>' +
      '<div class="two-col">' +
        '<div class="mat-card">' +
          '<div class="card-header"><h3>Low Stock Alerts</h3></div>' +
          '<div class="table-wrapper"><table>' +
            '<thead><tr><th>Product</th><th>Stock</th><th>Reorder Level</th><th>Status</th></tr></thead><tbody>' +
            (lowStock.length ? lowStock.slice(0, 5).map(function(p) {
              var cls = p.stock < p.reorderLevel ? 'danger' : 'warning';
              var lbl = p.stock < p.reorderLevel ? 'Critical' : 'Low';
              return '<tr><td class="font-medium">' + p.name + '</td><td>' + p.stock + '</td><td>' + p.reorderLevel + '</td><td><span class="status-badge ' + cls + '">' + lbl + '</span></td></tr>';
            }).join('') : '<tr><td colspan="4" class="empty-row">All items well stocked</td></tr>') +
          '</tbody></table></div>' +
        '</div>' +
        '<div class="mat-card">' +
          '<div class="card-header"><h3>Recent Sales</h3></div>' +
          '<div class="table-wrapper"><table>' +
            '<thead><tr><th>Receipt</th><th>Customer</th><th>Amount</th><th>Payment</th></tr></thead><tbody>' +
            sales.slice(-5).reverse().map(function(s) {
              return '<tr><td class="font-medium">' + s.receiptNumber + '</td><td>' + s.customerName + '</td><td>' + fmtCurrency(s.totalAmount) + '</td><td>' + s.paymentMethod + '</td></tr>';
            }).join('') +
          '</tbody></table></div>' +
        '</div>' +
      '</div>';
  }

  /* ================ Products ================ */
  window._app = {};
  window._app.prodPage = 1;
  window._app.prodPageSize = 8;
  function renderProducts(area) {
    window._app.prodPage = 1;
    area.innerHTML =
      '<div class="page-header"><h1>Products</h1><div class="header-actions"><div class="search-field" style="width:280px"><div class="input-wrapper"><span class="material-icons" style="font-size:20px;color:rgba(0,0,0,0.4);margin-right:8px">search</span><input type="text" id="prod-search" placeholder="Search products..." oninput="window.renderProdTable()"></div></div><button class="mat-raised-button mat-primary" onclick="showAddProduct()"><span class="material-icons" style="font-size:18px">add</span> Add Product</button></div></div>' +
      '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Manufacturer</th><th>Rack</th><th>Actions</th></tr></thead><tbody id="prod-tbody"></tbody></table></div>' +
      '<div class="pagination-bar" id="prod-pagination"></div></div>';
    renderProdTable();
  }
  window.renderProdTable = function() {
    var q = (document.getElementById('prod-search') && document.getElementById('prod-search').value || '').toLowerCase();
    var filtered = products.filter(function(p) { return !q || p.name.toLowerCase().indexOf(q) >= 0 || p.genericName.toLowerCase().indexOf(q) >= 0 || p.category.toLowerCase().indexOf(q) >= 0; });
    var total = filtered.length, tp = Math.ceil(total / window._app.prodPageSize), start = (window._app.prodPage - 1) * window._app.prodPageSize;
    var page = filtered.slice(start, start + window._app.prodPageSize);
    var tbody = document.getElementById('prod-tbody');
    if (!tbody) return;
    tbody.innerHTML = page.length ? page.map(function(p) {
      var sc = p.stock < p.reorderLevel ? 'danger' : p.stock < p.reorderLevel * 2 ? 'warning' : 'success';
      return '<tr><td><div class="font-medium">' + p.name + '</div><div class="text-muted">' + p.genericName + '</div></td><td>' + p.category + '</td><td class="price">' + fmtCurrency(p.price) + '</td><td><span class="status-badge ' + sc + '">' + p.stock + '</span></td><td>' + p.manufacturer + '</td><td>' + p.rack + '</td><td><button class="mat-stroked-button" style="padding:0 12px;height:32px;line-height:30px;font-size:13px" onclick="showEditProduct(\'' + p.id + '\')">Edit</button></td></tr>';
    }).join('') : '<tr><td colspan="7" class="empty-row">No products found</td></tr>';
    var pag = document.getElementById('prod-pagination');
    if (pag) pag.innerHTML = '<span>' + total + ' items</span><div class="pagination-controls"><button class="pagination-btn" onclick="window._app.prodPage=1;window.renderProdTable()" ' + (window._app.prodPage <= 1 ? 'disabled' : '') + '>First</button><button class="pagination-btn" onclick="window._app.prodPage--;window.renderProdTable()" ' + (window._app.prodPage <= 1 ? 'disabled' : '') + '>Prev</button><span style="padding:0 12px">Page ' + window._app.prodPage + ' of ' + (tp || 1) + '</span><button class="pagination-btn" onclick="window._app.prodPage++;window.renderProdTable()" ' + (window._app.prodPage >= tp ? 'disabled' : '') + '>Next</button><button class="pagination-btn" onclick="window._app.prodPage=' + tp + ';window.renderProdTable()" ' + (window._app.prodPage >= tp ? 'disabled' : '') + '>Last</button></div>';
  };

  window.showAddProduct = function() {
    showModal('Add Product',
      '<div class="form-row"><div class="form-field"><label>Product Name</label><div class="input-wrapper"><input type="text" id="pf-name"></div></div><div class="form-field"><label>Generic Name</label><div class="input-wrapper"><input type="text" id="pf-generic"></div></div></div>' +
      '<div class="form-row"><div class="form-field"><label>Category</label><div class="input-wrapper"><select id="pf-category">' + categories.map(function(c) { return '<option>' + c.name + '</option>'; }).join('') + '</select></div></div><div class="form-field"><label>Manufacturer</label><div class="input-wrapper"><select id="pf-mfr">' + manufacturers.map(function(m) { return '<option>' + m.name + '</option>'; }).join('') + '</select></div></div></div>' +
      '<div class="form-row"><div class="form-field"><label>Selling Price (Rs)</label><div class="input-wrapper"><input type="number" id="pf-price" step="0.01"></div></div><div class="form-field"><label>Purchase Price (Rs)</label><div class="input-wrapper"><input type="number" id="pf-pprice" step="0.01"></div></div></div>' +
      '<div class="form-row"><div class="form-field"><label>Stock</label><div class="input-wrapper"><input type="number" id="pf-stock"></div></div><div class="form-field"><label>Reorder Level</label><div class="input-wrapper"><input type="number" id="pf-reorder"></div></div></div>' +
      '<div class="form-row"><div class="form-field"><label>Rack</label><div class="input-wrapper"><input type="text" id="pf-rack"></div></div><div class="form-field"><label>Pack Size</label><div class="input-wrapper"><input type="text" id="pf-pack" value="100s"></div></div></div>',
      function() {
        var n = document.getElementById('pf-name').value;
        if (!n) { alert('Product name required'); return; }
        products.unshift({ id: uid('p'), name: n, genericName: document.getElementById('pf-generic').value || '', category: document.getElementById('pf-category').value, manufacturer: document.getElementById('pf-mfr').value, price: parseFloat(document.getElementById('pf-price').value) || 0, purchasePrice: parseFloat(document.getElementById('pf-pprice').value) || 0, stock: parseInt(document.getElementById('pf-stock').value) || 0, reorderLevel: parseInt(document.getElementById('pf-reorder').value) || 10, rack: document.getElementById('pf-rack').value || '', unit: 'Tablet', packSize: document.getElementById('pf-pack').value || '100s', rx: false, isActive: true });
        closeModal(); renderProdTable();
      }
    );
  }
  window.showEditProduct = function(id) {
    var p = null; for (var i = 0; i < products.length; i++) { if (products[i].id === id) { p = products[i]; break; } }
    if (!p) return;
    showModal('Edit Product',
      '<div class="form-row"><div class="form-field"><label>Product Name</label><div class="input-wrapper"><input type="text" id="pf-name" value="' + p.name + '"></div></div><div class="form-field"><label>Generic Name</label><div class="input-wrapper"><input type="text" id="pf-generic" value="' + (p.genericName || '') + '"></div></div></div>' +
      '<div class="form-row"><div class="form-field"><label>Category</label><div class="input-wrapper"><select id="pf-category">' + categories.map(function(c) { return '<option ' + (c.name === p.category ? 'selected' : '') + '>' + c.name + '</option>'; }).join('') + '</select></div></div><div class="form-field"><label>Manufacturer</label><div class="input-wrapper"><select id="pf-mfr">' + manufacturers.map(function(m) { return '<option ' + (m.name === p.manufacturer ? 'selected' : '') + '>' + m.name + '</option>'; }).join('') + '</select></div></div></div>' +
      '<div class="form-row"><div class="form-field"><label>Selling Price (Rs)</label><div class="input-wrapper"><input type="number" id="pf-price" step="0.01" value="' + p.price + '"></div></div><div class="form-field"><label>Stock</label><div class="input-wrapper"><input type="number" id="pf-stock" value="' + p.stock + '"></div></div></div>' +
      '<div class="form-row"><div class="form-field"><label>Reorder Level</label><div class="input-wrapper"><input type="number" id="pf-reorder" value="' + p.reorderLevel + '"></div></div><div class="form-field"><label>Rack</label><div class="input-wrapper"><input type="text" id="pf-rack" value="' + p.rack + '"></div></div></div>',
      function() {
        p.name = document.getElementById('pf-name').value || p.name; p.genericName = document.getElementById('pf-generic').value || p.genericName; p.category = document.getElementById('pf-category').value; p.manufacturer = document.getElementById('pf-mfr').value; p.price = parseFloat(document.getElementById('pf-price').value) || p.price; p.stock = parseInt(document.getElementById('pf-stock').value) || p.stock; p.reorderLevel = parseInt(document.getElementById('pf-reorder').value) || p.reorderLevel; p.rack = document.getElementById('pf-rack').value || p.rack;
        closeModal(); renderProdTable();
      }
    );
  }

  /* ================ Inventory ================ */
  function renderInventory(area) {
    initSales();
    var lowStock = products.filter(function(p) { return p.stock < p.reorderLevel * 2; });
    var critical = products.filter(function(p) { return p.stock < p.reorderLevel; });
    var outOfStock = products.filter(function(p) { return p.stock === 0; });

    area.innerHTML =
      '<h1 style="font-size:24px;font-weight:500;margin-bottom:8px">Stock Alerts</h1>' +
      '<div class="tab-bar"><div class="tab-item active" onclick="switchStockTab(this,\'low\')">Low Stock</div><div class="tab-item" onclick="switchStockTab(this,\'critical\')">Critical</div><div class="tab-item" onclick="switchStockTab(this,\'out\')">Out of Stock</div></div>' +
      '<div id="stock-tab-content"><div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Product</th><th>Stock</th><th>Reorder Level</th><th>Status</th></tr></thead><tbody>' +
      lowStock.map(function(p) {
        var cls = p.stock < p.reorderLevel ? 'danger' : 'warning';
        var lbl = p.stock < p.reorderLevel ? 'Critical' : 'Low';
        return '<tr><td class="font-medium">' + p.name + '</td><td>' + p.stock + '</td><td>' + p.reorderLevel + '</td><td><span class="status-badge ' + cls + '">' + lbl + '</span></td></tr>';
      }).join('') +
      '</tbody></table></div></div></div>';
  }
  window.switchStockTab = function(el, tab) {
    document.querySelectorAll('.tab-item').forEach(function(t) { t.classList.remove('active'); });
    el.classList.add('active');
    var lowStock = products.filter(function(p) { return p.stock < p.reorderLevel * 2; });
    var critical = products.filter(function(p) { return p.stock < p.reorderLevel; });
    var outOfStock = products.filter(function(p) { return p.stock === 0; });
    var data = tab === 'low' ? lowStock : tab === 'critical' ? critical : outOfStock;
    document.getElementById('stock-tab-content').innerHTML = '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Product</th><th>Stock</th><th>Reorder Level</th><th>Status</th></tr></thead><tbody>' +
      (data.length ? data.map(function(p) {
        var cls = p.stock < p.reorderLevel ? 'danger' : 'warning';
        var lbl = p.stock < p.reorderLevel ? 'Critical' : 'Low';
        return '<tr><td class="font-medium">' + p.name + '</td><td>' + p.stock + '</td><td>' + p.reorderLevel + '</td><td><span class="status-badge ' + cls + '">' + lbl + '</span></td></tr>';
      }).join('') : '<tr><td colspan="4" class="empty-row">No items in this category</td></tr>') + '</tbody></table></div></div>';
  };

  /* ================ Stock Movements ================ */
  function renderStockMovements(area) {
    initMovements();
    area.innerHTML =
      '<div class="page-header"><h1>Stock Movements</h1></div>' +
      '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Date</th><th>Product</th><th>Type</th><th>Qty</th><th>Before</th><th>After</th><th>Reference</th></tr></thead><tbody>' +
      stockMovements.slice().reverse().map(function(m) {
        var typeClass = m.movementType === 'StockIn' || m.movementType === 'Return' ? 'success' : 'warning';
        return '<tr><td>' + new Date(m.createdAtUtc).toLocaleDateString() + '</td><td class="font-medium">' + m.productName + '</td><td><span class="status-badge ' + typeClass + '">' + m.movementType + '</span></td><td>' + m.quantityChange + '</td><td>' + m.quantityBefore + '</td><td>' + m.quantityAfter + '</td><td class="text-muted">' + m.referenceNumber + '</td></tr>';
      }).join('') +
      '</tbody></table></div></div>';
  }

  /* ================ POS ================ */
  var cart = [];
  function renderPOS(area) {
    cart = [];
    area.innerHTML =
      '<div class="page-header"><h1>Point of Sale</h1></div>' +
      '<div class="pos-grid">' +
        '<div class="mat-card"><div class="card-header"><h3>Products</h3></div><div style="margin-bottom:12px"><div class="input-wrapper"><span class="material-icons" style="font-size:20px;color:rgba(0,0,0,0.4);margin-right:8px">search</span><input type="text" id="pos-search" placeholder="Search products..." oninput="renderPOSList()"></div></div><div id="pos-product-list"></div></div>' +
        '<div class="mat-card"><div class="card-header"><h3>Cart</h3></div><div id="pos-cart-items"></div><hr style="border:none;border-top:1px solid rgba(0,0,0,0.08);margin:12px 0"><div class="flex-between" style="padding:8px 0"><span class="font-medium">Total:</span><span class="font-bold" style="font-size:18px;color:#1976d2" id="pos-total">Rs 0</span></div><button class="mat-raised-button mat-primary" style="width:100%;margin-top:8px" onclick="checkoutPOS()"><span class="material-icons" style="font-size:18px">shopping_cart_checkout</span> Checkout</button></div>' +
      '</div>';
    renderPOSList();
  }
  window.renderPOSList = function() {
    var q = (document.getElementById('pos-search') && document.getElementById('pos-search').value || '').toLowerCase();
    var filtered = products.filter(function(p) { return !q || p.name.toLowerCase().indexOf(q) >= 0; });
    var el = document.getElementById('pos-product-list');
    el.innerHTML = '<div style="max-height:400px;overflow-y:auto">' + filtered.map(function(p) {
      return '<div class="item-line" style="cursor:pointer" onclick="addToCart(\'' + p.id + '\')"><span class="font-medium">' + p.name + '</span><span class="price">' + fmtCurrency(p.price) + ' <span class="text-muted">(' + p.stock + ')</span></span></div>';
    }).join('') + '</div>';
  };
  window.addToCart = function(id) {
    var prod = null; for (var i = 0; i < products.length; i++) { if (products[i].id === id) { prod = products[i]; break; } }
    if (!prod || prod.stock < 1) return;
    for (var j = 0; j < cart.length; j++) { if (cart[j].productId === id) { cart[j].quantity++; cart[j].total = cart[j].quantity * cart[j].unitPrice; renderCart(); return; } }
    cart.push({ productId: prod.id, productName: prod.name, quantity: 1, unitPrice: prod.price, total: prod.price });
    renderCart();
  };
  function renderCart() {
    var el = document.getElementById('pos-cart-items');
    var total = 0;
    if (el) {
      el.innerHTML = (cart.length ? cart.map(function(i, idx) {
        total += i.total;
        return '<div class="item-line"><span>' + i.productName + ' x' + i.quantity + '</span><span class="flex gap-8"><span class="price">' + fmtCurrency(i.total) + '</span><span class="material-icons" style="font-size:18px;color:#c62828;cursor:pointer" onclick="removeFromCart(' + idx + ')">remove_circle</span></span></div>';
      }).join('') : '<div style="padding:24px;text-align:center;color:rgba(0,0,0,0.4);font-style:italic">Cart is empty</div>');
    }
    var totalEl = document.getElementById('pos-total');
    if (totalEl) totalEl.textContent = fmtCurrency(total);
  }
  window.removeFromCart = function(idx) { cart.splice(idx, 1); renderCart(); };
  window.checkoutPOS = function() {
    if (!cart.length) { alert('Cart is empty'); return; }
    var items = cart.slice(); var sub = items.reduce(function(s, i) { return s + i.total; }, 0);
    var tax = Math.round(sub * 0.13);
    initSales();
    sales.unshift({ id: uid('s'), receiptNumber: 'INV-2026-' + (sales.length + 1).toString().padStart(4, '0'), saleDate: new Date().toISOString(), status: 'Completed', customerName: 'Walk-in', customerId: null, subTotal: sub, taxAmount: tax, discountAmount: 0, totalAmount: sub + tax, amountPaid: sub + tax, paymentMethod: 'Cash', items: items });
    cart.forEach(function(ci) {
      for (var i = 0; i < products.length; i++) { if (products[i].id === ci.productId) { products[i].stock -= ci.quantity; break; } }
    });
    cart = []; renderCart();
    alert('Sale completed! Receipt: ' + sales[0].receiptNumber);
  };

  /* ================ Sales ================ */
  window._app.salesPage = 1;
  window._app.salesPageSize = 10;
  function renderSales(area) {
    initSales(); window._app.salesPage = 1;
    area.innerHTML =
      '<div class="page-header"><h1>Sales</h1><div class="header-actions"><button class="mat-raised-button mat-primary" onclick="navigateTo(\'pos\')"><span class="material-icons" style="font-size:18px">add</span> New Sale</button></div></div>' +
      '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Receipt</th><th>Date</th><th>Customer</th><th>Items</th><th>Total</th><th>Status</th><th>Payment</th></tr></thead><tbody id="sales-tbody"></tbody></table></div>' +
      '<div class="pagination-bar" id="sales-pagination"></div></div>';
    renderSalesTable();
  }
  function renderSalesTable() {
    var total = sales.length, tp = Math.ceil(total / window._app.salesPageSize), start = (window._app.salesPage - 1) * window._app.salesPageSize;
    var page = sales.slice().reverse().slice(start, start + window._app.salesPageSize);
    var tbody = document.getElementById('sales-tbody');
    if (!tbody) return;
    tbody.innerHTML = page.map(function(s) {
      return '<tr><td class="font-medium">' + s.receiptNumber + '</td><td>' + new Date(s.saleDate).toLocaleDateString() + '</td><td>' + s.customerName + '</td><td>' + s.items.length + '</td><td class="price">' + fmtCurrency(s.totalAmount) + '</td><td><span class="status-badge ' + s.status + '">' + s.status + '</span></td><td>' + s.paymentMethod + '</td></tr>';
    }).join('');
    var pag = document.getElementById('sales-pagination');
    if (pag) pag.innerHTML = '<span>' + total + ' items</span><div class="pagination-controls"><button class="pagination-btn" onclick="window._app.salesPage=1;renderSalesTable()" ' + (window._app.salesPage <= 1 ? 'disabled' : '') + '>First</button><button class="pagination-btn" onclick="window._app.salesPage--;renderSalesTable()" ' + (window._app.salesPage <= 1 ? 'disabled' : '') + '>Prev</button><span style="padding:0 12px">Page ' + window._app.salesPage + ' of ' + (tp || 1) + '</span><button class="pagination-btn" onclick="window._app.salesPage++;renderSalesTable()" ' + (window._app.salesPage >= tp ? 'disabled' : '') + '>Next</button><button class="pagination-btn" onclick="window._app.salesPage=' + tp + ';renderSalesTable()" ' + (window._app.salesPage >= tp ? 'disabled' : '') + '>Last</button></div>';
  }

  /* ================ Purchase Orders ================ */
  function renderPurchaseOrders(area) {
    initPOs();
    area.innerHTML =
      '<div class="page-header"><h1>Purchase Orders</h1><div class="header-actions"><button class="mat-raised-button mat-primary" onclick="showNewPO()"><span class="material-icons" style="font-size:18px">add</span> New PO</button></div></div>' +
      '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Order #</th><th>Supplier</th><th>Date</th><th>Items</th><th>Total</th><th>Status</th></tr></thead><tbody>' +
      purchaseOrders.slice().reverse().map(function(po) {
        return '<tr><td class="font-medium">' + po.orderNumber + '</td><td>' + po.supplierName + '</td><td>' + new Date(po.orderDate).toLocaleDateString() + '</td><td>' + po.items.length + '</td><td class="price">' + fmtCurrency(po.totalAmount) + '</td><td><span class="status-badge ' + po.status + '">' + po.status + '</span></td></tr>';
      }).join('') +
      '</tbody></table></div></div>';
  }

  window.showNewPO = function() {
    var suppOpts = suppliers.map(function(s) { return '<option value="' + s.id + '">' + s.name + '</option>'; }).join('');
    showModal('New Purchase Order',
      '<div class="form-field"><label>Supplier</label><div class="input-wrapper"><select id="po-supplier">' + suppOpts + '</select></div></div>' +
      '<hr style="border:none;border-top:1px solid rgba(0,0,0,0.08);margin:16px 0">' +
      '<div class="form-row"><div class="form-field"><label>Product</label><div class="input-wrapper"><select id="po-product">' + products.map(function(p) { return '<option value="' + p.id + '">' + p.name + ' (Rs ' + p.purchasePrice + ')</option>'; }).join('') + '</select></div></div><div class="form-field"><label>Qty</label><div class="input-wrapper"><input type="number" id="po-qty" value="50"></div></div></div>' +
      '<button class="mat-stroked-button" onclick="addPOItem()"><span class="material-icons" style="font-size:16px">add</span> Add Item</button>' +
      '<div id="po-items" style="margin-top:12px"></div>' +
      '<div style="margin-top:12px;text-align:right;font-size:16px;font-weight:700;color:#1976d2">Total: <span id="po-total">Rs 0</span></div>',
      function() {
        if (!window._poItems || !window._poItems.length) { alert('Add at least one item'); return; }
        var supp = null; for (var i = 0; i < suppliers.length; i++) { if (suppliers[i].id === document.getElementById('po-supplier').value) { supp = suppliers[i]; break; } }
        var items = window._poItems.slice(); var total = items.reduce(function(s, i) { return s + i.total; }, 0);
        purchaseOrders.unshift({ id: uid('po'), orderNumber: 'PO-2026-' + (purchaseOrders.length + 1).toString().padStart(4, '0'), status: 'Pending', orderDate: new Date().toISOString(), supplierName: supp ? supp.name : 'Unknown', supplierId: supp ? supp.id : null, totalAmount: Math.round(total * 1.13), items: items });
        window._poItems = []; closeModal(); navigateTo('purchase-orders');
      }
    );
    window._poItems = [];
  }
  window.addPOItem = function() {
    var sel = document.getElementById('po-product'); var prodId = sel.value;
    var prod = null; for (var i = 0; i < products.length; i++) { if (products[i].id === prodId) { prod = products[i]; break; } }
    if (!prod) return;
    var qty = parseInt(document.getElementById('po-qty').value) || 50;
    window._poItems.push({ productId: prodId, productName: prod.name, quantity: qty, unitPrice: prod.purchasePrice, total: prod.purchasePrice * qty });
    var gt = window._poItems.reduce(function(s, i) { return s + i.total; }, 0);
    document.getElementById('po-total').textContent = fmtCurrency(Math.round(gt * 1.13));
    document.getElementById('po-items').innerHTML = window._poItems.map(function(i) {
      return '<div class="item-line"><span>' + i.productName + ' x' + i.quantity + '</span><span class="price">' + fmtCurrency(i.total) + '</span></div>';
    }).join('');
  };

  /* ================ Suppliers ================ */
  function renderSuppliers(area) {
    area.innerHTML =
      '<div class="page-header"><h1>Suppliers</h1><div class="header-actions"><button class="mat-raised-button mat-primary" onclick="showAddSupplier()"><span class="material-icons" style="font-size:18px">add</span> Add Supplier</button></div></div>' +
      '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Name</th><th>Contact</th><th>Email</th><th>Phone</th><th>Status</th><th>Actions</th></tr></thead><tbody>' +
      suppliers.map(function(s) {
        return '<tr><td class="font-medium">' + s.name + '</td><td>' + s.contactPerson + '</td><td>' + s.email + '</td><td>' + s.phone + '</td><td><span class="status-badge ' + (s.isActive ? 'Completed' : 'Voided') + '">' + (s.isActive ? 'Active' : 'Inactive') + '</span></td><td><button class="mat-stroked-button" style="padding:0 12px;height:32px;line-height:30px;font-size:13px" onclick="showEditSupplier(\'' + s.id + '\')">Edit</button></td></tr>';
      }).join('') +
      '</tbody></table></div></div>';
  }
  window.showAddSupplier = function() {
    showModal('Add Supplier',
      '<div class="form-row"><div class="form-field"><label>Name</label><div class="input-wrapper"><input type="text" id="sf-name"></div></div><div class="form-field"><label>Contact Person</label><div class="input-wrapper"><input type="text" id="sf-contact"></div></div></div>' +
      '<div class="form-row"><div class="form-field"><label>Email</label><div class="input-wrapper"><input type="email" id="sf-email"></div></div><div class="form-field"><label>Phone</label><div class="input-wrapper"><input type="text" id="sf-phone"></div></div></div>' +
      '<div class="form-field"><label>Address</label><div class="input-wrapper"><input type="text" id="sf-address"></div></div>',
      function() {
        suppliers.unshift({ id: uid('sup'), name: document.getElementById('sf-name').value || 'New Supplier', contactPerson: document.getElementById('sf-contact').value || '', email: document.getElementById('sf-email').value || '', phone: document.getElementById('sf-phone').value || '', address: document.getElementById('sf-address').value || '', isActive: true });
        closeModal(); navigateTo('suppliers');
      }
    );
  }
  window.showEditSupplier = function(id) {
    var s = null; for (var i = 0; i < suppliers.length; i++) { if (suppliers[i].id === id) { s = suppliers[i]; break; } }
    if (!s) return;
    showModal('Edit Supplier',
      '<div class="form-row"><div class="form-field"><label>Name</label><div class="input-wrapper"><input type="text" id="sf-name" value="' + s.name + '"></div></div><div class="form-field"><label>Contact Person</label><div class="input-wrapper"><input type="text" id="sf-contact" value="' + s.contactPerson + '"></div></div></div>' +
      '<div class="form-row"><div class="form-field"><label>Email</label><div class="input-wrapper"><input type="email" id="sf-email" value="' + s.email + '"></div></div><div class="form-field"><label>Phone</label><div class="input-wrapper"><input type="text" id="sf-phone" value="' + s.phone + '"></div></div></div>' +
      '<div class="form-field"><label>Address</label><div class="input-wrapper"><input type="text" id="sf-address" value="' + (s.address || '') + '"></div></div>',
      function() { s.name = document.getElementById('sf-name').value || s.name; s.contactPerson = document.getElementById('sf-contact').value || s.contactPerson; s.email = document.getElementById('sf-email').value || s.email; s.phone = document.getElementById('sf-phone').value || s.phone; s.address = document.getElementById('sf-address').value || s.address; closeModal(); navigateTo('suppliers'); }
    );
  }

  /* ================ Customers ================ */
  function renderCustomers(area) {
    area.innerHTML =
      '<div class="page-header"><h1>Customers</h1><div class="header-actions"><button class="mat-raised-button mat-primary" onclick="showAddCustomer()"><span class="material-icons" style="font-size:18px">add</span> Add Customer</button></div></div>' +
      '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Address</th><th>Status</th><th>Actions</th></tr></thead><tbody>' +
      customers.map(function(c) {
        return '<tr><td class="font-medium">' + c.firstName + ' ' + c.lastName + '</td><td>' + c.email + '</td><td>' + c.phone + '</td><td>' + c.address + '</td><td><span class="status-badge ' + (c.isActive ? 'Completed' : 'Voided') + '">' + (c.isActive ? 'Active' : 'Inactive') + '</span></td><td><button class="mat-stroked-button" style="padding:0 12px;height:32px;line-height:30px;font-size:13px" onclick="showEditCustomer(\'' + c.id + '\')">Edit</button></td></tr>';
      }).join('') +
      '</tbody></table></div></div>';
  }
  window.showAddCustomer = function() {
    showModal('Add Customer',
      '<div class="form-row"><div class="form-field"><label>First Name</label><div class="input-wrapper"><input type="text" id="cf-first"></div></div><div class="form-field"><label>Last Name</label><div class="input-wrapper"><input type="text" id="cf-last"></div></div></div>' +
      '<div class="form-row"><div class="form-field"><label>Email</label><div class="input-wrapper"><input type="email" id="cf-email"></div></div><div class="form-field"><label>Phone</label><div class="input-wrapper"><input type="text" id="cf-phone"></div></div></div>' +
      '<div class="form-field"><label>Address</label><div class="input-wrapper"><input type="text" id="cf-address"></div></div>',
      function() {
        customers.unshift({ id: uid('c'), firstName: document.getElementById('cf-first').value || 'New', lastName: document.getElementById('cf-last').value || 'Customer', email: document.getElementById('cf-email').value || '', phone: document.getElementById('cf-phone').value || '', address: document.getElementById('cf-address').value || '', isActive: true });
        closeModal(); navigateTo('customers');
      }
    );
  }
  window.showEditCustomer = function(id) {
    var c = null; for (var i = 0; i < customers.length; i++) { if (customers[i].id === id) { c = customers[i]; break; } }
    if (!c) return;
    showModal('Edit Customer',
      '<div class="form-row"><div class="form-field"><label>First Name</label><div class="input-wrapper"><input type="text" id="cf-first" value="' + c.firstName + '"></div></div><div class="form-field"><label>Last Name</label><div class="input-wrapper"><input type="text" id="cf-last" value="' + c.lastName + '"></div></div></div>' +
      '<div class="form-row"><div class="form-field"><label>Email</label><div class="input-wrapper"><input type="email" id="cf-email" value="' + c.email + '"></div></div><div class="form-field"><label>Phone</label><div class="input-wrapper"><input type="text" id="cf-phone" value="' + c.phone + '"></div></div></div>' +
      '<div class="form-field"><label>Address</label><div class="input-wrapper"><input type="text" id="cf-address" value="' + c.address + '"></div></div>',
      function() { c.firstName = document.getElementById('cf-first').value || c.firstName; c.lastName = document.getElementById('cf-last').value || c.lastName; c.email = document.getElementById('cf-email').value || c.email; c.phone = document.getElementById('cf-phone').value || c.phone; c.address = document.getElementById('cf-address').value || c.address; closeModal(); navigateTo('customers'); }
    );
  }

  /* ================ Prescriptions ================ */
  function renderPrescriptions(area) {
    initPrescriptions();
    area.innerHTML =
      '<div class="page-header"><h1>Prescriptions</h1></div>' +
      '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Reference</th><th>Date</th><th>Customer</th><th>Prescriber</th><th>Items</th><th>Status</th></tr></thead><tbody>' +
      prescriptions.slice().reverse().map(function(rx) {
        return '<tr><td class="font-medium">' + rx.prescriptionReference + '</td><td>' + new Date(rx.prescriptionDate).toLocaleDateString() + '</td><td>' + rx.customerName + '</td><td>' + rx.prescriberName + '</td><td>' + rx.items.length + '</td><td><span class="status-badge ' + rx.dispensingStatus + '">' + rx.dispensingStatus + '</span></td></tr>';
      }).join('') +
      '</tbody></table></div></div>';
  }

  /* ================ Returns ================ */
  function renderReturns(area) {
    var returns = [
      { id: 'ret-001', returnNumber: 'RET-2026-0001', returnDate: new Date(2026, 6, 18).toISOString(), saleReceipt: 'INV-2026-0025', customerName: 'Ram Sharma', reason: 'Damaged product', refundAmount: 480, status: 'Completed' },
      { id: 'ret-002', returnNumber: 'RET-2026-0002', returnDate: new Date(2026, 6, 17).toISOString(), saleReceipt: 'INV-2026-0018', customerName: 'Sita Poudel', reason: 'Expired batch', refundAmount: 650, status: 'Pending' }
    ];
    area.innerHTML =
      '<div class="page-header"><h1>Returns</h1></div>' +
      '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Return #</th><th>Date</th><th>Sale Receipt</th><th>Customer</th><th>Reason</th><th>Refund</th><th>Status</th></tr></thead><tbody>' +
      returns.map(function(r) {
        return '<tr><td class="font-medium">' + r.returnNumber + '</td><td>' + new Date(r.returnDate).toLocaleDateString() + '</td><td>' + r.saleReceipt + '</td><td>' + r.customerName + '</td><td>' + r.reason + '</td><td class="price">' + fmtCurrency(r.refundAmount) + '</td><td><span class="status-badge ' + r.status + '">' + r.status + '</span></td></tr>';
      }).join('') +
      '</tbody></table></div></div>';
  }

  /* ================ Audit Logs ================ */
  function renderAuditLogs(area) {
    var actions = ['Create', 'Update', 'Delete', 'Login', 'Logout'];
    var entities = ['Product', 'Sale', 'Purchase', 'Customer', 'Supplier', 'User', 'Setting'];
    var logs = [];
    for (var i = 0; i < 25; i++) {
      var d = new Date(2026, 6, 19 - Math.floor(i / 3), Math.floor(Math.random() * 9) + 8, Math.floor(Math.random() * 60));
      logs.push({ id: 'log-' + i, entityName: entities[Math.floor(Math.random() * entities.length)], action: actions[Math.floor(Math.random() * actions.length)], userName: 'admin@pharmacy.com', createdAtUtc: d.toISOString() });
    }
    area.innerHTML =
      '<div class="page-header"><h1>System Logs</h1></div>' +
      '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Date/Time</th><th>Entity</th><th>Action</th><th>User</th></tr></thead><tbody>' +
      logs.map(function(l) {
        return '<tr><td>' + new Date(l.createdAtUtc).toLocaleString() + '</td><td>' + l.entityName + '</td><td><span class="status-badge info">' + l.action + '</span></td><td>' + l.userName + '</td></tr>';
      }).join('') +
      '</tbody></table></div></div>';
  }

  /* ================ Reports Subpages ================ */
  function renderReportSubpage(area, subpage) {
    initSales();
    var totalRev = sales.reduce(function(s, i) { return s + i.totalAmount; }, 0);
    var totalCost = Math.round(totalRev * 0.6);
    var totalProfit = totalRev - totalCost;

    switch (subpage) {
      case 'medicine-wise-sales':
        area.innerHTML =
          '<div class="page-header"><h1>Medicine-Wise Sales Report</h1></div>' +
          '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Product</th><th>Qty Sold</th><th>Revenue</th><th>Cost</th><th>Profit</th><th>Margin %</th></tr></thead><tbody>' +
          products.slice(0, 15).map(function(p) {
            var qty = Math.floor(Math.random() * 200) + 20;
            var rev = qty * p.price;
            var cost = qty * p.purchasePrice;
            var profit = rev - cost;
            return '<tr><td class="font-medium">' + p.name + '</td><td>' + qty + '</td><td class="price">' + fmtCurrency(rev) + '</td><td class="price">' + fmtCurrency(cost) + '</td><td class="price">' + fmtCurrency(profit) + '</td><td>' + (rev ? Math.round(profit / rev * 100) : 0) + '%</td></tr>';
          }).join('') +
          '</tbody></table></div></div>';
        break;
      case 'sales-report':
        area.innerHTML =
          '<div class="page-header"><h1>Sales Report</h1></div>' +
          '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Receipt</th><th>Date</th><th>Customer</th><th>Sub Total</th><th>Tax</th><th>Total</th></tr></thead><tbody>' +
          sales.slice(-20).reverse().map(function(s) {
            return '<tr><td class="font-medium">' + s.receiptNumber + '</td><td>' + new Date(s.saleDate).toLocaleDateString() + '</td><td>' + s.customerName + '</td><td class="price">' + fmtCurrency(s.subTotal) + '</td><td class="price">' + fmtCurrency(s.taxAmount) + '</td><td class="price">' + fmtCurrency(s.totalAmount) + '</td></tr>';
          }).join('') +
          '</tbody></table></div></div>';
        break;
      case 'financial':
        area.innerHTML =
          '<div class="page-header"><h1>Financial Summary</h1></div>' +
          '<div class="stats-grid" style="margin-top:0">' +
            '<div class="mat-card stat-card"><span class="material-icons stat-icon green">trending_up</span><div class="stat-value">' + fmtCurrency(totalRev) + '</div><p class="stat-label">Total Revenue</p></div>' +
            '<div class="mat-card stat-card"><span class="material-icons stat-icon orange">money_off</span><div class="stat-value warn">' + fmtCurrency(totalCost) + '</div><p class="stat-label">Total Cost</p></div>' +
            '<div class="mat-card stat-card"><span class="material-icons stat-icon blue">analytics</span><div class="stat-value">' + fmtCurrency(totalProfit) + '</div><p class="stat-label">Gross Profit</p></div>' +
            '<div class="mat-card stat-card"><span class="material-icons stat-icon purple">percent</span><div class="stat-value">' + (totalRev ? Math.round(totalProfit / totalRev * 100) : 0) + '%</div><p class="stat-label">Profit Margin</p></div>' +
          '</div>';
        break;
      case 'inventory-valuation':
        area.innerHTML =
          '<div class="page-header"><h1>Inventory Valuation</h1></div>' +
          '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Product</th><th>Qty</th><th>Unit Cost</th><th>Total Value</th></tr></thead><tbody>' +
          products.map(function(p) {
            var val = p.stock * p.purchasePrice;
            return '<tr><td class="font-medium">' + p.name + '</td><td>' + p.stock + '</td><td class="price">' + fmtCurrency(p.purchasePrice) + '</td><td class="price">' + fmtCurrency(val) + '</td></tr>';
          }).join('') +
          '</tbody></table></div></div>';
        break;
      case 'profit-loss':
        var catRevenue = {};
        categories.slice(0, 6).forEach(function(c) {
          var rev = Math.floor(Math.random() * 300000) + 50000;
          catRevenue[c.name] = { revenue: rev, cost: Math.round(rev * 0.6), profit: Math.round(rev * 0.4) };
        });
        area.innerHTML =
          '<div class="page-header"><h1>Profit & Loss by Category</h1></div>' +
          '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Category</th><th>Revenue</th><th>Cost</th><th>Profit</th><th>Margin</th></tr></thead><tbody>' +
          Object.keys(catRevenue).map(function(k) {
            var cr = catRevenue[k];
            return '<tr><td class="font-medium">' + k + '</td><td class="price">' + fmtCurrency(cr.revenue) + '</td><td class="price">' + fmtCurrency(cr.cost) + '</td><td class="price">' + fmtCurrency(cr.profit) + '</td><td>' + Math.round(cr.profit / cr.revenue * 100) + '%</td></tr>';
          }).join('') +
          '</tbody></table></div></div>';
        break;
      case 'expiry-forecast':
        area.innerHTML =
          '<div class="page-header"><h1>Expiry Forecast</h1></div>' +
          '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Product</th><th>Batch</th><th>Expiry</th><th>Qty</th><th>Days Left</th></tr></thead><tbody>' +
          products.slice(0, 10).map(function(p) {
            var days = Math.floor(Math.random() * 300) + 30;
            var cls = days < 60 ? 'danger' : days < 120 ? 'warning' : 'success';
            return '<tr><td class="font-medium">' + p.name + '</td><td>B' + (2025000 + Math.floor(Math.random() * 100)) + '</td><td>2027-0' + Math.floor(Math.random() * 6 + 1) + '-' + String(Math.floor(Math.random() * 20) + 10).padStart(2, '0') + '</td><td>' + (Math.floor(Math.random() * 100) + 10) + '</td><td><span class="status-badge ' + cls + '">' + days + ' days</span></td></tr>';
          }).join('') +
          '</tbody></table></div></div>';
        break;
      case 'top-selling':
        area.innerHTML =
          '<div class="page-header"><h1>Top / Least Selling</h1></div><div class="two-col">' +
          '<div class="mat-card"><div class="card-header"><h3>Top Selling</h3></div><div class="table-wrapper"><table><thead><tr><th>Product</th><th>Qty Sold</th><th>Revenue</th></tr></thead><tbody>' +
          products.slice(0, 8).map(function(p) {
            var qty = Math.floor(Math.random() * 500) + 100;
            return '<tr><td class="font-medium">' + p.name + '</td><td>' + qty + '</td><td class="price">' + fmtCurrency(qty * p.price) + '</td></tr>';
          }).join('') +
          '</tbody></table></div></div>' +
          '<div class="mat-card"><div class="card-header"><h3>Least Selling</h3></div><div class="table-wrapper"><table><thead><tr><th>Product</th><th>Qty Sold</th><th>Revenue</th></tr></thead><tbody>' +
          products.slice(-5).map(function(p) {
            var qty = Math.floor(Math.random() * 15) + 1;
            return '<tr><td class="font-medium">' + p.name + '</td><td>' + qty + '</td><td class="price">' + fmtCurrency(qty * p.price) + '</td></tr>';
          }).join('') +
          '</tbody></table></div></div></div>';
        break;
      case 'tax-report':
        area.innerHTML =
          '<div class="page-header"><h1>Tax Report</h1></div>' +
          '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Tax Name</th><th>Taxable Amount</th><th>Tax Amount</th><th>Transactions</th></tr></thead><tbody>' +
          '<tr><td class="font-medium">VAT 13%</td><td class="price">' + fmtCurrency(1250000) + '</td><td class="price">' + fmtCurrency(162500) + '</td><td>420</td></tr>' +
          '<tr><td class="font-medium">VAT 5%</td><td class="price">' + fmtCurrency(350000) + '</td><td class="price">' + fmtCurrency(17500) + '</td><td>180</td></tr>' +
          '<tr><td class="font-medium">Exempt</td><td class="price">' + fmtCurrency(180000) + '</td><td class="price">Rs 0</td><td>95</td></tr>' +
          '</tbody></table></div></div>';
        break;
    }
  }

  /* ================ Settings Subpages ================ */
  function renderSettingsSubpage(area, subpage) {
    switch (subpage) {
      case 'pharmacy-info':
        area.innerHTML =
          '<div class="page-header"><h1>Pharmacy Settings</h1></div>' +
          '<div class="mat-card">' +
            '<div class="info-row"><div class="info-label">Pharmacy Name</div><div class="info-value">Pharmacy Manager</div></div>' +
            '<div class="info-row"><div class="info-label">Address</div><div class="info-value">Kathmandu, Nepal</div></div>' +
            '<div class="info-row"><div class="info-label">Phone</div><div class="info-value">01-4xxxxxx</div></div>' +
            '<div class="info-row"><div class="info-label">Email</div><div class="info-value">info@pharmacymanager.com</div></div>' +
            '<div class="info-row"><div class="info-label">Registration No.</div><div class="info-value">REG-2024-001</div></div>' +
            '<div class="info-row"><div class="info-label">VAT/PAN No.</div><div class="info-value">VAT-123456</div></div>' +
          '</div>';
        break;
      case 'tax-config':
        area.innerHTML =
          '<div class="page-header"><h1>Tax Configuration</h1></div>' +
          '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Name</th><th>Rate</th><th>Default</th><th>Status</th></tr></thead><tbody>' +
          '<tr><td class="font-medium">VAT 13%</td><td>13%</td><td><span class="material-icons" style="color:#2e7d32;font-size:18px">check_circle</span></td><td><span class="status-badge Completed">Active</span></td></tr>' +
          '<tr><td class="font-medium">VAT 5%</td><td>5%</td><td></td><td><span class="status-badge Completed">Active</span></td></tr>' +
          '<tr><td class="font-medium">Exempt</td><td>0%</td><td></td><td><span class="status-badge Completed">Active</span></td></tr>' +
          '</tbody></table></div></div>';
        break;
      case 'coupons':
        area.innerHTML =
          '<div class="page-header"><h1>Coupons</h1></div>' +
          '<div class="mat-card"><div class="table-wrapper"><table><thead><tr><th>Code</th><th>Discount</th><th>Min Purchase</th><th>Usage</th><th>Valid Until</th><th>Status</th></tr></thead><tbody>' +
          '<tr><td class="font-medium">WELCOME10</td><td>10%</td><td>Rs 500</td><td>145/1000</td><td>2026-12-31</td><td><span class="status-badge Completed">Active</span></td></tr>' +
          '<tr><td class="font-medium">FESTIVE50</td><td>Rs 50</td><td>Rs 1000</td><td>23/500</td><td>2026-10-31</td><td><span class="status-badge Completed">Active</span></td></tr>' +
          '<tr><td class="font-medium">NEWUSER20</td><td>20%</td><td>Rs 200</td><td>78/500</td><td>2026-12-31</td><td><span class="status-badge Completed">Active</span></td></tr>' +
          '</tbody></table></div></div>';
        break;
      case 'backup':
        area.innerHTML =
          '<div class="page-header"><h1>Backup & Restore</h1></div>' +
          '<div class="mat-card" style="text-align:center;padding:40px">' +
            '<span class="material-icons" style="font-size:48px;color:#1976d2;margin-bottom:16px">backup</span>' +
            '<p style="margin-bottom:16px;color:rgba(0,0,0,0.54)">Create a backup of all pharmacy data or restore from a previous backup.</p>' +
            '<div class="flex gap-8" style="justify-content:center">' +
              '<button class="mat-raised-button mat-primary"><span class="material-icons" style="font-size:18px">download</span> Download Backup</button>' +
              '<button class="mat-stroked-button"><span class="material-icons" style="font-size:18px">upload</span> Restore</button>' +
            '</div>' +
          '</div>';
        break;
    }
  }

  /* ================ Modal ================ */
  function showModal(title, body, onSave) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = body;
    document.getElementById('modal-overlay').classList.remove('hidden');
    var saveFn = function() { if (onSave) onSave(); };
    document.getElementById('modal-save').onclick = saveFn;
    document.getElementById('modal-cancel').onclick = closeModal;
    document.getElementById('modal-close').onclick = closeModal;
  }
  window.closeModal = function() {
    document.getElementById('modal-overlay').classList.add('hidden');
  };

  /* ================ Auth ================ */
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('login-error').classList.add('hidden');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (!email || !password) {
      document.getElementById('login-error').textContent = 'Email and password are required';
      document.getElementById('login-error').classList.remove('hidden');
      return;
    }
    if (email === 'admin@pharmacy.com' && password === 'admin123') {
      document.getElementById('login-screen').classList.add('hidden');
      document.getElementById('main-app').classList.remove('hidden');
      initSales(); initPOs(); initPrescriptions(); initMovements();
      navigateTo('dashboard');
    } else {
      document.getElementById('login-error').textContent = 'Invalid email or password';
      document.getElementById('login-error').classList.remove('hidden');
    }
  });

  /* ================ Sidebar Navigation ================ */
  document.querySelectorAll('.nav-item').forEach(function(el) {
    el.addEventListener('click', function(e) {
      var page = this.dataset.page;
      if (!page) return;
      // Toggle submenus
      var parent = this.parentElement;
      if (parent && parent.classList.contains('nav-submenu')) {
        toggleSubmenu(this);
        return;
      }
      navigateTo(page);
    });
  });

  /* ================ Submenu items ================ */
  document.querySelectorAll('.submenu-item').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      var page = this.closest('.nav-submenu').querySelector('.nav-item').dataset.page;
      var subpage = this.dataset.subpage;
      navigateTo(page, subpage);
    });
  });

  /* ================ User Menu Dropdown ================ */
  document.getElementById('user-menu-btn').addEventListener('click', function() {
    var existing = document.querySelector('.dropdown');
    if (existing) { existing.remove(); return; }
    var dd = document.createElement('div');
    dd.className = 'dropdown open';
    dd.style.position = 'absolute';
    dd.innerHTML = '<div style="padding:12px 16px;border-bottom:1px solid rgba(0,0,0,0.08)"><div class="font-medium">Admin</div><div class="text-muted">admin@pharmacy.com</div></div><div class="dropdown-item" id="dropdown-logout"><span class="material-icons" style="font-size:18px">logout</span> Logout</div>';
    document.getElementById('user-menu-btn').appendChild(dd);
    document.getElementById('dropdown-logout').addEventListener('click', function() { dd.remove(); logout(); });
    document.addEventListener('click', function closeDD(ev) { if (!dd.contains(ev.target) && ev.target !== document.getElementById('user-menu-btn')) { dd.remove(); document.removeEventListener('click', closeDD); } });
  });

  /* ================ Logout ================ */
  function logout() {
    document.getElementById('main-app').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('email').value = 'admin@pharmacy.com';
    document.getElementById('password').value = '';
  }
  document.getElementById('logout-btn').addEventListener('click', logout);

  /* ================ Sidebar Collapse Toggle ================ */
  document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.getElementById('desktop-content').classList.toggle('collapsed');
  });

  /* ================ Mobile Responsive ================ */
  function isMobile() { return window.innerWidth <= 767; }
  function handleResize() {
    if (isMobile()) {
      document.getElementById('sidebar').classList.add('collapsed');
    }
  }
  window.addEventListener('resize', handleResize);

})();
