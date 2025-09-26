function scrollMenu(amount) {
    document.getElementById('menu').scrollBy({
      left: amount,
      behavior: 'smooth'
    });
  }