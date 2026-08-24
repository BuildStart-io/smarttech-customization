# SmartTech Customization

This repository contains the tailored BuildStart customization for SmartTech. It modifies the core BuildStart application to include custom features requested specifically for SmartTech's workflow.

## Customizations Implemented

### 1. Predefined Message Matcher
Replaced the default "Welcome Message" functionality with a robust "Predefined Matches" feature. 
This feature allows for dynamic, exact-sentence interception of incoming WhatsApp messages.

**Frontend Features:**
- **Exact Sentence Trigger**: The exact phrase the user must send (e.g., "I want to know more about XYZ product").
- **Custom Bot Reply**: Define exactly what the bot should say in response.
- **Image Attachments**: Attach up to 10 images per match.
- **Order Preference**: A dropdown toggle to choose whether the text reply is sent before the images, or vice versa.

**Backend Interceptor (`process-message`):**
- Scans all incoming messages against the `predefined_matches` list.
- If an exact sentence match is found, it sends the predefined text/media and instantly halts the AI processing to conserve API credits.
- Automatically records the bot's predefined reply into the `conversations` database to maintain full AI context for future messages.
- The original welcome message logic is preserved for other tenants on the shared backend to ensure backward compatibility.

### 2. Multi-tenancy Data Isolation
- Added `custom_fields` (JSONB) columns to all major shared DB tables (`settings`, `profiles`, `orders`, `products`, `leads`, `conversations`).
- This allows custom data to be stored securely on shared database infrastructure without structural conflicts between tenants.

## Environment Variables
Ensure the `.env` configuration contains your custom SmartTech Bot API key:
- `BOT_API_KEY`: [YOUR_SMARTTECH_BOT_API_KEY]

*(Note: Never commit local `.env` files to this repository).*
- Fixed AI edge cases related to token limits and image URL list formatting
