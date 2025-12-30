import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import rooferImage from "@/assets/roofer_image.png";
import logo from "@/assets/logo.png";

interface FormData {
  name: string;
  phone: string;
  serviceType: string[];
  roofingMaterial: string;
  roofIssue: string;
  urgency: string;
  roofAge: string;
  propertyType: string;
  propertyAddress: string;
  isOwner: string;
  budget: string;
  startTime: string;
  readyToMove: string;
  bestTime: string;
}

const RoofingLeadFunnel = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    serviceType: [],
    roofingMaterial: "",
    roofIssue: "",
    urgency: "",
    roofAge: "",
    propertyType: "",
    propertyAddress: "",
    isOwner: "",
    budget: "",
    startTime: "",
    readyToMove: "",
    bestTime: "",
  });

  const totalSteps = 14;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleServiceTypeToggle = (value: string) => {
    setFormData(prev => ({
      ...prev,
      serviceType: prev.serviceType.includes(value)
        ? prev.serviceType.filter(item => item !== value)
        : [...prev.serviceType, value]
    }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() !== "";
      case 1:
        return formData.serviceType.length > 0;
      case 2:
        return formData.roofingMaterial !== "";
      case 3:
        return formData.roofIssue !== "";
      case 4:
        return formData.urgency !== "";
      case 5:
        return formData.roofAge !== "";
      case 6:
        return formData.propertyType !== "";
      case 7:
        return formData.propertyAddress.trim() !== "";
      case 8:
        return formData.isOwner !== "";
      case 9:
        return formData.budget !== "";
      case 10:
        return formData.startTime !== "";
      case 11:
        return formData.readyToMove !== "";
      case 12:
        return formData.phone.trim() !== "";
      case 13:
        return formData.bestTime !== "";
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Let's get started!</h2>
              <p className="text-gray-600">What's your name?</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="text-lg py-6"
                autoFocus
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Great, {formData.name}!</h2>
              <p className="text-gray-600">What type of roofing service do you need?</p>
              <p className="text-sm text-gray-500">Select all that apply</p>
            </div>
            <div className="space-y-3">
              {["New Roof Installation", "Roof Replacement", "Roof Repair", "Roof Inspection", "Emergency Repair", "Maintenance", "Gutter Work", "Other"].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors"
                  onClick={() => handleServiceTypeToggle(option)}>
                  <Checkbox
                    id={option}
                    checked={formData.serviceType.includes(option)}
                    onCheckedChange={() => handleServiceTypeToggle(option)}
                  />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">What type of roofing material are you interested in?</h2>
              <p className="text-gray-600">Or what material is currently on your roof?</p>
            </div>
            <RadioGroup value={formData.roofingMaterial} onValueChange={(value) => setFormData({ ...formData, roofingMaterial: value })}>
              {[
                "Asphalt Shingles",
                "Metal Roofing",
                "Tile Roofing",
                "Flat Roofing",
                "Wood Shakes",
                "Not sure / Need recommendation"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Do you know what the issue is?</h2>
              <p className="text-gray-600">This helps us prepare for your service</p>
            </div>
            <RadioGroup value={formData.roofIssue} onValueChange={(value) => setFormData({ ...formData, roofIssue: value })}>
              {[
                "Active leak",
                "Storm damage",
                "Missing/damaged shingles",
                "Roof is aging",
                "Sagging roof",
                "Poor ventilation",
                "Not sure / Need inspection"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">How urgent is this?</h2>
            </div>
            <RadioGroup value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
              {[
                "Emergency - Need immediate help",
                "Urgent - Within a few days",
                "Soon - Within a few weeks",
                "Planning ahead - No rush"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">How old is your current roof?</h2>
            </div>
            <RadioGroup value={formData.roofAge} onValueChange={(value) => setFormData({ ...formData, roofAge: value })}>
              {[
                "Less than 5 years",
                "5-10 years",
                "10-15 years",
                "15-20 years",
                "More than 20 years",
                "Not sure / New construction"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">What type of property is this?</h2>
            </div>
            <RadioGroup value={formData.propertyType} onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
              {[
                "Single-family home",
                "Multi-family home",
                "Commercial building",
                "Industrial facility",
                "Other"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">What is the property address?</h2>
              <p className="text-gray-600">This helps us confirm we service your area</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Property Address</Label>
              <Input
                id="address"
                type="text"
                placeholder="123 Main St, Austin, TX 78701"
                value={formData.propertyAddress}
                onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                className="text-lg py-6"
                autoFocus
              />
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Are you the property owner?</h2>
            </div>
            <RadioGroup value={formData.isOwner} onValueChange={(value) => setFormData({ ...formData, isOwner: value })}>
              {[
                "Yes, I own the property",
                "No, I'm a tenant",
                "Property manager",
                "I'm acting on behalf of the owner"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">Do you have a budget range in mind?</h2>
              <p className="text-gray-600">This helps us provide the most relevant options</p>
            </div>
            <RadioGroup value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
              {[
                "Under $5,000",
                "$5,000 - $10,000",
                "$10,000 - $20,000",
                "$20,000 - $40,000",
                "Over $40,000",
                "Not sure yet"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 10:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">When would you like the work to start?</h2>
            </div>
            <RadioGroup value={formData.startTime} onValueChange={(value) => setFormData({ ...formData, startTime: value })}>
              {[
                "As soon as possible",
                "Within 1-2 weeks",
                "Within 1 month",
                "Within 3 months",
                "Just planning for now"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 11:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">If you find the right contractor and the pricing makes sense...</h2>
              <p className="text-gray-600">Are you ready to move forward?</p>
            </div>
            <RadioGroup value={formData.readyToMove} onValueChange={(value) => setFormData({ ...formData, readyToMove: value })}>
              {[
                "Yes, ready to get started",
                "Probably, need to review details",
                "Still comparing options",
                "Just gathering information"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 12:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">What's the best phone number to reach you?</h2>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(512) 555-0123"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="text-lg py-6"
                autoFocus
              />
            </div>
          </div>
        );

      case 13:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">What's the best time to call?</h2>
            </div>
            <RadioGroup value={formData.bestTime} onValueChange={(value) => setFormData({ ...formData, bestTime: value })}>
              {[
                "Morning (8am - 12pm)",
                "Afternoon (12pm - 5pm)",
                "Evening (5pm - 8pm)",
                "Anytime"
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3 p-4 border rounded-lg hover:border-primary cursor-pointer transition-colors">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      default:
        return null;
    }
  };

  if (currentStep === totalSteps) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-500">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-16 h-16 text-green-600" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Thank you, {formData.name}!
            </h1>
            <p className="text-xl text-gray-600">
              We've received your roofing service request and one of our roofing specialists will call you soon.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-lg text-gray-700">
                📞 Expect a call at: <span className="font-semibold">{formData.phone}</span>
              </p>
              <p className="text-gray-600">
                Best time to reach you: <span className="font-semibold">{formData.bestTime}</span>
              </p>
              {formData.urgency === "Emergency - Need immediate help" && (
                <p className="text-red-600 font-semibold mt-4">
                  We understand this is an emergency. We'll prioritize your request!
                </p>
              )}
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <p className="text-gray-600 mb-6">
              Want to discuss your roofing project sooner? Book a meeting with us now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/book-meeting")}
                size="lg"
                className="text-lg px-8"
              >
                Book a Meeting
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                Return to Homepage
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Progress value={progress} className="h-2 rounded-none" />
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-gray-600"
          >
            Exit
          </Button>
        </div>
      </div>

      {/* Hero Cover Section */}
      <div className="relative h-64 md:h-80 mt-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${rooferImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <img
            src={logo}
            alt="Hill Country Repair Co."
            className="h-16 w-16 md:h-20 md:w-20 mb-4 animate-in fade-in zoom-in duration-500"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            Hill Country Roofing Services
          </h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            Get Your Free Roofing Estimate - Expert Service You Can Trust
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-8 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-6">
              {currentStep > 0 && (
                <Button
                  onClick={handleBack}
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                size="lg"
                className="w-full md:flex-1"
              >
                {currentStep === totalSteps - 1 ? "Submit" : "Continue"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoofingLeadFunnel;
