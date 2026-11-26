ALTER TABLE public.quote_requests
  ADD COLUMN IF NOT EXISTS submission_id uuid,
  ADD COLUMN IF NOT EXISTS client_hash text,
  ADD COLUMN IF NOT EXISTS business_email_sent_at timestamptz,
  ADD COLUMN IF NOT EXISTS customer_email_sent_at timestamptz;
CREATE UNIQUE INDEX IF NOT EXISTS quote_requests_submission_id_key ON public.quote_requests(submission_id);
CREATE INDEX IF NOT EXISTS quote_requests_client_hash_created_idx ON public.quote_requests(client_hash, created_at);