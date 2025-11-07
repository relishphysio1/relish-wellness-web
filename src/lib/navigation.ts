export const scrollToAppointmentSection = (navigate: (path: string) => void, currentPath: string) => {
  if (currentPath !== '/') {
    navigate('/');
    setTimeout(() => {
      const appointmentSection = document.getElementById('appointment');
      if (appointmentSection) {
        appointmentSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  } else {
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
