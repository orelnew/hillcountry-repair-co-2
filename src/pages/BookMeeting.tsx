import { InlineWidget } from "react-calendly";
import { Clock, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const BookMeeting = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img
                src={logo}
                alt="Hill Country Repair Co."
                className="h-16 w-16 md:h-20 md:w-20"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Schedule Your Consultation
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
              Thank you for your interest. Choose a time that works best for you.
            </p>

            {/* Quick Instructions */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 max-w-3xl mx-auto shadow-sm">
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Choose a quiet location (home or office)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Block out 30 minutes for maximum value</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                This call will help us understand your project needs and provide you with an accurate estimate.
              </p>
            </div>

            {/* Simple CTA */}
            <div className="text-center mb-2">
              <h3 className="text-2xl font-bold text-gray-900">
                Pick Your Perfect Time Below 👇
              </h3>
            </div>
          </div>

          {/* Calendly Widget - Full Width */}
          <div className="w-full">
            <InlineWidget
              url="https://calendly.com/windflowmedia/contractor-growth-followup-meeting-clone"
              styles={{ height: '900px', width: '100%', minHeight: '900px' }}
            />
          </div>

          {/* Footer Message */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-3">
              <CheckCircle className="h-4 w-4" />
              Your time is valuable to us
            </div>
            <p className="text-gray-600 max-w-xl mx-auto text-sm mb-6">
              We're looking forward to helping you bring your project vision to life with quality craftsmanship and dedicated service.
            </p>

            <Button
              onClick={() => navigate("/")}
              variant="outline"
              size="lg"
            >
              Return to Homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMeeting;
