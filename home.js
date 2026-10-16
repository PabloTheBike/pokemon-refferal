(() => {
  const c = window.REFERRAL_CONFIG || {};
  const link = document.getElementById('referral');
  const missing = document.getElementById('missing');
  document.getElementById('description').textContent = c.description || 'Check out my current promotion below.';
  try {
    const url = new URL(c.url);
    if (url.protocol !== 'https:') throw new Error('Only HTTPS links allowed');
    link.href = url.href;
    link.textContent = c.buttonText || 'View Current Offer ↗';
    link.classList.remove('hidden');
    missing.classList.add('hidden');
  } catch (_) { }
})();
