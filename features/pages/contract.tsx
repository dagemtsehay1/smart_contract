import { Box, Button, Flex, Text, TextInput } from "@mantine/core";
import { RTE } from "../components/rte";
import { DateInput } from "@mantine/dates";
import { useState } from "react";

export default function ContractPage() {
  const [date, setDate] = useState<Date | null>(null);
  const [contract, setContract] = useState<string>(
    `<h2 style="text-align: center"><strong>Tender Contract</strong></h2><p style="text-align: start"><strong>Parties:</strong> This Tender Contract ("Contract") is entered into between:</p><p style="text-align: start"><strong>[Your Company Name],</strong> a [Legal Entity Type], registered under the laws of [Jurisdiction], with its principal place of business at [Address] (referred to as the "Company"),</p><p style="text-align: start">and</p><p style="text-align: start"><strong>[Tendering Party's Name],</strong> a [Legal Entity Type], registered under the laws of [Jurisdiction], with its principal place of business at [Address] (referred to as the "Tendering Party").</p><p style="text-align: start"><strong>Background:</strong> The Company has issued a tender for [Project/Service/Product Description]. The Tendering Party has submitted a proposal in response to this tender.</p><p style="text-align: start"><strong>Agreement:</strong></p><ol><li><p><strong>Scope of Work:</strong> The Tendering Party agrees to perform the services/work as described in their proposal in response to the Company's tender for [Project/Service/Product Description].</p></li><li><p><strong>Terms and Conditions:</strong> The terms and conditions of the Tendering Party's proposal, as submitted in response to the tender, are hereby incorporated into this Contract by reference. Any conflicts between the terms and conditions of the proposal and this Contract shall be resolved in favor of this Contract.</p></li><li><p><strong>Price and Payment:</strong> The agreed-upon price for the services/work is [Amount in Currency]. Payment terms shall be as outlined in the proposal, and payments will be made in accordance with the agreed schedule.</p></li><li><p><strong>Duration:</strong> The duration of the contract shall be [Start Date] to [End Date], unless otherwise agreed upon by both parties in writing.</p></li><li><p><strong>Termination:</strong> Either party may terminate this Contract in accordance with the termination clause outlined in the proposal or as otherwise agreed upon in writing by both parties.</p></li><li><p><strong>Confidentiality:</strong> Both parties agree to keep any confidential information obtained during the course of this Contract confidential and not to disclose it to any third parties.</p></li><li><p><strong>Indemnification:</strong> The Tendering Party agrees to indemnify and hold the Company harmless from any claims, damages, losses, or expenses arising out of or related to the performance of the services/work.</p></li><li><p><strong>Governing Law and Jurisdiction:</strong> This Contract shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or in connection with this Contract shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].</p></li></ol><p style="text-align: start"><strong>Signatures:</strong> Both parties hereby agree to the terms and conditions outlined in this Contract.</p>`
  );

  const onSubmit = (e:any) => {
    e.preventDefault();
    console.log({
      contract,
      date,
    });
  };

  return (
    <Box m={4} p={10} className="bg-white rounded">
      <Text align="center" fw="bold" size="xl">
        Add New{" "}
      </Text>
      <form onSubmit={onSubmit}>
        <RTE onChange={setContract} />

        <DateInput
          value={date}
          onChange={setDate}
          label="Contract Date"
          placeholder="Select Date"
          w={500}
          required
          // mx="auto"
        />

        <Button className="bg-primary" mt={10} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}
