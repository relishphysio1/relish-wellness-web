
interface ContactMapProps {
  mapEmbedUrl: string;
  className?: string;
}

const ContactMap = ({ mapEmbedUrl, className }: ContactMapProps) => {
  return (
    <div className={className}>
      <div className="rounded-xl overflow-hidden h-full min-h-[300px] shadow-md">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          className="w-full h-full min-h-[300px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
