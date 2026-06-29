import express from 'express';

const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  return res.json({ success: true, message: 'Backend healthy' });
});

// Mock career recommendation endpoint
router.post('/career', (req, res) => {
  const { skills, experienceYears } = req.body || {};

  // Very basic mock recommendation logic
  const recommendations = [];

  if (Array.isArray(skills) && skills.includes('javascript')) {
    recommendations.push({ role: 'Frontend Engineer', reason: 'Strong JavaScript/CSS skills detected' });
  }

  if (experienceYears && experienceYears >= 2) {
    recommendations.push({ role: 'Mid-level Software Engineer', reason: 'Enough experience to target mid-level roles' });
  }

  if (recommendations.length === 0) {
    recommendations.push({ role: 'Junior Developer', reason: 'General recommendation for getting started' });
  }

  res.json({
    success: true,
    input: { skills, experienceYears },
    recommendations,
  });
});

// Mock chatbot endpoint
router.post('/chatbot', (req, res) => {
  const { message } = req.body || {};

  // Echo back for now
  res.json({
    success: true,
    reply: `You said: ${message || '(no message provided)'} — this is a mock reply.`,
  });
});

export default router;
